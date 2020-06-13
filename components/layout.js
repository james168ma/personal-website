import Head from 'next/head'
import Link from 'next/link'
import NavItem from './navItem'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'James'
export const siteTitle = 'james168ma'

export default function Layout({ pageName, ids, children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav className={styles.navbar}>
        <ul className={styles.navbarNav}>
          <NavItem link="/" text="Home" selected={home}/>  /*edit this later*/
          {ids.map(id => {
            return (
              <NavItem link={"/subpages/" + id} text={id} selected={pageName === id} key={id}/>
            )
          })}
        </ul>
      </nav>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
