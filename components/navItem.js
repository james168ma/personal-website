import styles from './navItem.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function NavItem({ text, link, selected }) {
  return (
    <li className={styles.navItem}>
      <Link href={link} as={ process.env.BACKEND_URL + '/about' }>
        <a className={styles.navLink}>
          { selected ?
            (
              <>
                <span className={styles.mark} />
                <span className={styles.linkText + " " + styles.selectedLinkText}>{text}</span>
              </>
            )
            :
            (
              <span className={styles.linkText}>{text}</span>
            )
          }
        </a>
      </Link>
    </li>
  )
}
