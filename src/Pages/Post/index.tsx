import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'


export function Post() {
  return (
    <div className={styles.postContainer}>

      <section className={styles.postHeaderContainer}>
        <div className={styles.postLinksContainer}>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </a>

          <a href="">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            ver no github
          </a>
        </div>
        <h1>
          JavaScript data types and data structures
        </h1>

        <div className={styles.postInfoContainer}>
          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faGithub} />
            <p>
              @ftorres
            </p>
          </div>

          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>
              há 1 dia
            </p>
          </div>

          <div className={styles.postInfo}>
            <FontAwesomeIcon icon={faComment} />
            <p>
              5 comentários
            </p>
          </div>


        </div>
      </section>

    </div>
  )
}