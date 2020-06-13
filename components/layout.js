import Head from 'next/head'
import Link from 'next/link'
import NavItem from './navItem'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'James'
export const siteTitle = 'james168ma'

export default function Layout({ pageName, ids, children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <a href="https://github.com/james168ma" ><img src="/images/GitHub-Mark-64px.png" className={styles.logo} /></a>
        <nav className={styles.topNav} >
          <ul className={styles.topNavLinks}>
            <li>
              <Link href="/">
                <a>Service1</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Service2</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Service3</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <a href="mailto:james168ma@gmail.com?subject=SweetWords"><button className={styles.button} >Contact Me!</button></a>
        </Link>
      </header>

      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarNav}>
            <NavItem link="/" text="Home" selected={home}/>
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
    </>
  );
}
