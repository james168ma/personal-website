import Head from 'next/head'
import Link from 'next/link'
import NavItem from './navItem'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'James'
export const siteTitle = 'james168ma'

// If I ever want to have a topNav
// <nav className={styles.topNav} >
//   <ul className={styles.topNavLinks}>
//     <li>
//       <Link href="/">
//         <a>Service1</a>
//       </Link>
//     </li>
//     <li>
//       <Link href="/">
//         <a>Service2</a>
//       </Link>
//     </li>
//   </ul>
// </nav>

export default function Layout({ pageName, ids, children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <a href="https://github.com/james168ma" className={styles.logoLink}><img src="/images/GitHub_Logo.png" className={styles.logo}/></a>
        <a href="https://www.linkedin.com/in/james168ma" className={styles.logoLink + " " + styles.lastLogoLink}><img src="/images/LinkedIn_logo.png" className={styles.logo} /></a>
        <a href="mailto:james168ma@gmail.com"><button className={styles.button} >Email Me</button></a>
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
            <Link href="/" as={ process.env.BACKEND_URL + "/"}>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
