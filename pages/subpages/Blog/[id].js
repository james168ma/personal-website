import Head from 'next/head'
import Date from '../../../components/date'
import Layout from '../../../components/layout'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getSortedData } from '../../../lib/pages'
import utilStyles from '../../../styles/utils.module.css'

export default function Post({ id, contentHtml, ids, data }) {
  return (
    <Layout pageName={id} ids={ids}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{data.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={data.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {

  const files = fs.readdirSync('posts')

  const paths = files.map(filename => ({
    params: {
      id: filename.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {id}}) {

// get the individual subpage
  const markdownWithMetaData = fs.readFileSync(path.join('posts', id + ".md"))

  const parsedMarkdown = matter(markdownWithMetaData)

  const processedContent = await remark()
    .use(html)
    .process(parsedMarkdown.content)
  const contentHtml = processedContent.toString()

// generate the nav bar items:
  const ids = getSortedData("projects")

  return ({
    props: {
      id,
      contentHtml,
      ids,
      data: parsedMarkdown.data
    }
  })
}
