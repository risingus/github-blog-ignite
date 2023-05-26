import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import styles from './styles.module.scss'


export function Home() {
  return (
    <div className={styles.homeContainer}>
      <Profile />

      <form className={styles.searchPostsContainer} noValidate>
        <div className={styles.formHeader}>
          <strong>
            publicações
          </strong>

          <span>
            6 publicações
          </span>
        </div>

        <input type="text" placeholder='Buscar Conteúdo' />
      </form>


      <div className={styles.cardsContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}