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
          and Node.js with the Next.js framework. Feel free to click around and explore!
        </p>
        <p>
          <b>If you are a recruiter</b>, just keep in mind that this website is also my personal blog
          in addition to a space to show my projects, so most my site is written in an informal manner.
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
