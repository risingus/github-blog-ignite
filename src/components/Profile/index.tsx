import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.scss'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'



export function Profile() {

  return (
    <section className={styles.profileContainer}>
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />

      <div className={styles.bioContainer}>
        <div className={styles.bioHeader}>
          <h1>Fernanda Torres</h1>
          <a href="">
            <p>
              github
            </p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean consectetur sapien quam, vel fringilla lorem posuere vel.
          Phasellus vitae sodales risus. Cras molestie tortor at nisl sollicitudin
        </p>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faGithub} />
            <p>@ftorres</p>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faBuilding} />
            <p>rocketSeat</p>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>
              30 seguidores
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}