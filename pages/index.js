import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedData } from '../lib/pages'

export default function Home({ ids }) {
  return (
    <Layout pageName={"Home"} ids={ids} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Welcome!</h1>
      <section className={utilStyles.headingMd}>
        <p>
          Looks like you've found your way to my website. It's made with React
          and the Next.js framework. Feel free to click around and explore!
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {

  const ids = getSortedData("projects")

  return {
    props: {
      ids
    }
  }
}
