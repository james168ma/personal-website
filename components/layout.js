import React from 'react'
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

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mobileNavStyle: styles.mobileNavbarNone,
      mobileNavButton: "/images/hamburgerIcon.png"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    global.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    global.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: global.innerWidth, height: global.innerHeight })
    console.log(this.state.width)
  }

  changeMobileNav() {
    if(this.state.mobileNavStyle === styles.mobileNavbarNone) {
      this.setState({
        mobileNavStyle: styles.mobileNavbarShow,
        mobileNavButton: "/images/backIcon.png"
      })
    } else {
      this.setState({
        mobileNavStyle: styles.mobileNavbarNone,
        mobileNavButton: "/images/hamburgerIcon.png"
      })
    }
  }

  render() {
    let navBar = (this.state.width > 600 ?
      (
        <nav id="desktopNav" className={styles.navbar}>
          <ul className={styles.navbarNav}>
            <NavItem link="/" text="Home" selected={this.props.home}/>
            {this.props.ids.map(id => {
              return (
                <NavItem link={"/subpages/" + id} text={id} selected={this.props.pageName === id} key={id}/>
              )
            })}
          </ul>
        </nav>
      ) : (
        <nav id="mobileNav" className={ styles.mobileNavbar + " " + this.state.mobileNavStyle }>
          <ul className={styles.mobileNavbarNav}>
            <NavItem link="/" text="Home" selected={this.props.home}/>
            {this.props.ids.map(id => {
              return (
                <NavItem link={"/subpages/" + id} text={id} selected={this.props.pageName === id} key={id}/>
              )
            })}
          </ul>
        </nav>
      )
    );

    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          {(this.state.width <= 600) &&
            <button className={styles.mobileNavButton} onClick={() => this.changeMobileNav()}>
              <img src={this.state.mobileNavButton} className={styles.mobileNavButtonImg}/>
            </button>
          }
          <a href="https://github.com/james168ma" className={styles.logoLink}><img src="/images/GitHub_Logo.png" className={styles.logo}/></a>
          <a href="https://www.linkedin.com/in/james168ma" className={styles.logoLink + " " + styles.lastLogoLink}><img src="/images/LinkedIn_logo.png" className={styles.logo} /></a>
          <a href="mailto:james168ma@gmail.com"><button className={styles.button} >Email Me</button></a>
        </header>

        <div className={styles.container}>
          {navBar}
          <main>{this.props.children}</main>
          {!this.props.home && (
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
}

// {
//   <nav id="mobileNav" className={styles.navbar}>
//     <ul className={styles.navbarNav}>
//       <NavItem link="/" text="Home" selected={this.props.home}/>
//       {this.props.ids.map(id => {
//         return (
//           <NavItem link={"/subpages/" + id} text={id} selected={this.props.pageName === id} key={id}/>
//         )
//       })}
//     </ul>
//   </nav>
// }

// export default function Layout({ pageName, ids, children, home }) {
//   return (
//     <>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className={styles.header}>
//         <button className={styles.mobileNavButton}><img src="/images/mobileNavButton.png" className={styles.mobileNavButtonImg}/></button>
//         <a href="https://github.com/james168ma" className={styles.logoLink}><img src="/images/GitHub_Logo.png" className={styles.logo}/></a>
//         <a href="https://www.linkedin.com/in/james168ma" className={styles.logoLink + " " + styles.lastLogoLink}><img src="/images/LinkedIn_logo.png" className={styles.logo} /></a>
//         <a href="mailto:james168ma@gmail.com"><button className={styles.button} >Email Me</button></a>
//       </header>
//
//       <div className={styles.container}>
//         <nav className={styles.navbar}>
//           <ul className={styles.navbarNav}>
//             <NavItem link="/" text="Home" selected={home}/>
//             {ids.map(id => {
//               return (
//                 <NavItem link={"/subpages/" + id} text={id} selected={pageName === id} key={id}/>
//               )
//             })}
//           </ul>
//         </nav>
//
//         <main>{children}</main>
//         {!home && (
//           <div className={styles.backToHome}>
//             <Link href="/">
//               <a>← Back to home</a>
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
