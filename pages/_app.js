import { Router } from 'next/dist/client/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/global.css'

NProgress.configure({ showSpinner: false, trickleRate: 0.05, trickleSpeed: 300 })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
