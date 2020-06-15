//import React from "react";
import Head from 'next/head'
import Layout from '../../components/layout'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getSortedPostsData } from '../../lib/subpages'

export default function SubPage({ id, contentHtml, ids, data }) {
  return (
    <Layout pageName={id} home={false} ids={ids}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {

  const files = fs.readdirSync('subpages')

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
  const markdownWithMetaData = fs.readFileSync(path.join('subpages', id + ".md"))

  const parsedMarkdown = matter(markdownWithMetaData)

  const processedContent = await remark()
    .use(html)
    .process(parsedMarkdown.content)
  const contentHtml = processedContent.toString()

// generate the nav bar items:
  const ids = getSortedPostsData()

  return ({
    props: {
      id,
      contentHtml,
      ids,
      data: parsedMarkdown.data
    }
  })
}
