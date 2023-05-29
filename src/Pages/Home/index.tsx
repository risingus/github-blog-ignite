import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { useProfile } from '../../hooks/useProfile'
import styles from './styles.module.scss'
import { PostProps } from '../../reducers/profile/reducer';

const searchFormValidation = zod.object({
  query: zod.string().trim()
})

type queryForm = zod.infer<typeof searchFormValidation>

export function Home() {
  const state = useProfile();
  const { fetchPosts } = state
  const { handleSubmit, register, formState } = useForm<queryForm>({
    resolver: zodResolver(searchFormValidation),
    defaultValues: {
      query: ''
    }
  })
  const { isSubmitting } = formState

  async function searchPosts({ query }: queryForm) {
    try {
      if (isSubmitting) return;
      await fetchPosts(query)

    } catch (error) {

      toast.error('😅 falha ao carregar posts', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className={styles.homeContainer}>
      <Profile {...state} />

      <form className={styles.searchPostsContainer} onSubmit={handleSubmit(searchPosts)}>
        <div className={styles.formHeader}>
          <strong>
            publicações
          </strong>

          <span>
            {state.totalCount} publicações
          </span>
        </div>

        <input type="text" placeholder='Buscar Conteúdo' disabled={isSubmitting} {...register('query')} />
      </form>


      <div className={styles.cardsContainer}>

        {
          state.posts.length > 0
          && state.posts.map((post: PostProps) => (
            <PostCard {...post} key={post.id} />
          ))
        }
      </div>
    </div>
  )
}