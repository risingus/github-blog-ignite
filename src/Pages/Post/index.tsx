import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'
import { usePost } from '../../hooks/usePost'
import { ExternalLink, LinkNav } from '../../components/Link'
import { Info } from '../../components/Info'

export function Post() {
  const { title, login, createdAt, comments, body, url } = usePost();

  return (
    <div className={styles.postContainer}>

      <section className={styles.postHeaderContainer}>
        <div className={styles.postLinksContainer}>
          <LinkNav to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </LinkNav>

          <ExternalLink to={url}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            ver no github
          </ExternalLink>
        </div>
        <h1>
          {title}
        </h1>

        <div className={styles.postInfoContainer}>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
              {login}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
              {createdAt}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faComment} />
              {
              comments > 1 || comments === 0 ? `${comments} comentários` : `${comments} comentário`
              }
          </Info>
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