import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../Link'
import { Info } from '../Info'

interface ProfileProps {
  avatar: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  url: string
}

export function Profile({ avatar, name, bio, login, company, followers, url }: ProfileProps) {

  return (
    <section className={styles.profileContainer}>
      <img src={avatar} alt="" />

      <div className={styles.bioContainer}>
        <div className={styles.bioHeader}>
          <h1>{name}</h1>
          <ExternalLink to={url}>
            <p>
              github
            </p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </div>
        <p>
          {bio}
        </p>

        <div className={styles.infoContainer}>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </Info>

          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
              {followers} seguidores
          </Info>
        </div>
      </div> 

    </section>
  )
}