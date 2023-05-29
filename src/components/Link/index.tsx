import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface LinksProps {
  to: string
  children: ReactNode
}

const LinkNav = ({ to, children }: LinksProps) => {
  return (
    <Link to={to} className={styles.links}>
      {children}
    </Link>
  )
}


const ExternalLink = ({ to, children }: LinksProps) => {
  return (
    <a href={to} target='_blank' className={styles.links}>{children}</a>
  )
}


export {
  LinkNav,
  ExternalLink
}