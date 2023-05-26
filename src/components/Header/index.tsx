import headerBackground from '../../assets/img/header.svg'
import styles from './styles.module.scss';



export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerBackground} alt="" />
    </header>
  )
}