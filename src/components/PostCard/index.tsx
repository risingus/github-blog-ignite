import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { PostProps } from '../../reducers/profile/reducer';



export function PostCard({ title, body, formatedCreatedAt, number }: PostProps) {
  const navigate = useNavigate();

  function seePost(number: number) {
    navigate(`/post/${number}`)
  }

  return (
    <section className={styles.cardContainer} onClick={() => seePost(number)}>
      <div className={styles.cardHeader}>
        <strong>
          {title || 'Sem título 😅'}
        </strong>

        <span>
          {formatedCreatedAt}
        </span>
      </div>
      <p>
        {body || 'Sem conteúdo 😅'}
      </p>
    </section>
  )
}