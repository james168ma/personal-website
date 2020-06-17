import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getSortedData, getSortedPostsData } from '../../lib/pages'
import utilStyles from '../../styles/utils.module.css'

export default function Blog({ ids, allPostsData }) {
  return (
    <Layout pageName={"Blog"} blog ids={ids}>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className={utilStyles.headingXl}>My Blog</h1>
      <section className={utilStyles.headingMd}>
        <p>This is my blog, and I'll probably periodically post random stuff here from time to time.</p>
        <p>Below are temporary filler posts so it doesn't look too empty :)</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/subpages/Blog/[id]" as={`/subpages/Blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

// generate the nav bar items:
  const ids = getSortedData("projects")

// generate posts:
  const allPostsData = getSortedPostsData()

  return ({
    props: {
      ids,
      allPostsData
    }
  })
}
