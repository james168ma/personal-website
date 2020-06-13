import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Hackathons() {
  return (
    <Layout home={false}>
      <Head>
        <title>Hackathon Projects</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hackathons page :)</p>
        <p>
          (This is a sample Website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>

    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = getAllSubpageIds()
//   return {
//     paths,
//     fallback: false  // learn about `fallback: true`: https://nextjs.org/docs/basic-features/data-fetching#fallback-pages
//   }
// }
//
// export async function getStaticProps({ params }) {
//   const subpageData = await getSubpageData(params.id) // `await` b/c getPostData uses it
//   return {
//     props: {
//       subpageData
//     }
//   }
// }
