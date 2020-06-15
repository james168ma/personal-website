import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const subpagesDirectory = 'subpages'

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(subpagesDirectory)

  const allSubpagesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace('.md', '')
    const markdownWithMetaData = fs.readFileSync(path.join(subpagesDirectory, id + ".md"))

    const parsedMarkdown = matter(markdownWithMetaData)

    // Combine the data with the id
    return {
        id,
        ...parsedMarkdown.data
    }
  })
  // Sort posts by date
  const sortedSubpages = allSubpagesData.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1
    } else {
      return -1
    }
  })

  return sortedSubpages.map(sortedSubpage => sortedSubpage.id)
}
