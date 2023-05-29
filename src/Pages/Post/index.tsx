import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'
import { usePost } from '../../hooks/usePost'

export function Post() {
  const { title, login, createdAt, comments, body } = usePost();

  return (
    <div className={styles.postContainer}>

      <section className={styles.postHeaderContainer}>
        <div className={styles.postLinksContainer}>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </Link>

          <Link to="">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            ver no github
          </Link>
        </div>
        <h1>
          {title}
        </h1>

        <div className={styles.postInfoContainer}>
          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faGithub} />
            <p>
              {login}
            </p>
          </div>

          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>
              {createdAt}
            </p>
          </div>

          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faComment} />
            <p>
              {
                comments > 1 ? `${comments} comentários` : `${comments} comentário`
              }
            </p>
          </div>
        </div>
      </section>

      <main className={styles.mainContent}>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </main>

    </div>
  )
}