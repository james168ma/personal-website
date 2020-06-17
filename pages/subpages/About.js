import Head from 'next/head'
import Layout from '../../components/layout'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getSortedData } from '../../lib/pages'

export default function About({ contentHtml, ids, data }) {
  return (
    <Layout pageName={"About"} about ids={ids}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export async function getStaticProps() {

// get the individual subpage
  const markdownWithMetaData = fs.readFileSync(path.join('subpages', "About.md"))

  const parsedMarkdown = matter(markdownWithMetaData)

  const processedContent = await remark()
    .use(html)
    .process(parsedMarkdown.content)
  const contentHtml = processedContent.toString()

// generate the nav bar items:
  const ids = getSortedData("projects")

  return ({
    props: {
      contentHtml,
      ids,
      data: parsedMarkdown.data
    }
  })
}
