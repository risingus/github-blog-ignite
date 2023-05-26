import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss';
import { Header } from '../../components/Header';



export function DefaultLayout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
    </div>

  )
}