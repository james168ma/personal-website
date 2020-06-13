import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/subpages'

export default function Home({ ids }) {
  return (
    <Layout pageName={"Home"} ids={ids} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm a CS student at UCLA and I'm going through this tutorial to learn Next.js!</p>
        <p>
          (This is a sample Website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {

  const ids = getSortedPostsData()

  return {
    props: {
      ids
    }
  }
}
