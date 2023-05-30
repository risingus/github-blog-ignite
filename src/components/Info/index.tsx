import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface InfoProps {
  children: ReactNode
}


export const Info = ({ children }: InfoProps) => {
  return (
    <div className={styles.infoContainer}>
      {children}
    </div>
  )
}