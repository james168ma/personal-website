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
          Currently, the website is still under construction so things might not look the cleanest
          in some areas. Also, there are no blog posts at the moment :(
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
