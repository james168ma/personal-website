import styles from './navItem.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function NavItem({ text, link, selected, subItem, target, href }) {
  // if selected have the purple mark
  const inner = (
      <span className={styles.linkText}>{text}</span>
  )

  // different types of links
  let aLink

  if (target) {
    aLink = (
      <a className={styles.navLink} target={target}>
        {inner}
      </a>
    )
  } else if (href) {
    aLink = (
      <a className={styles.navLink} href={href}>
        {inner}
      </a>
    )
  } else {
    aLink = (
      <a className={styles.navLink}>
        {inner}
      </a>
    )
  }

  // figuring out if we need next/link
  const outerLink = (
    link ? (
      <Link href={link}>
        {aLink}
      </Link>
    ) : (
      aLink
    )
  )

  return (
    <li className={styles.navItem}>
      {selected && !subItem &&
        <span className={styles.mark} />
      }
      {outerLink}
    </li>
  )
}
