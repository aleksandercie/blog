const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query ArticlesPage {
            allMdx {
                nodes {
                  frontmatter {
                    slug
                  }
                }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: node.frontmatter.slug,
            component: path.resolve('./src/templates/ArticleDetailsPage/ArticleDetailsPage.tsx'),
            context: { slug: node.frontmatter.slug }
        })
    })
}