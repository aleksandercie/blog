import React, { FC } from 'react';
import { graphql } from "gatsby";
import AllArticlesPage from "../templates/AllArticlesPage/AllArticlesPage";
import { AllArticlesPageTypes } from '../@types/content/allarticles';

const IndexPage: FC<{ data: AllArticlesPageTypes.AllArticleSiteType }> = ({ data }) => {
  return (
    <AllArticlesPage data={data} />
  )
}

export const query = graphql` 
query AllArticles {
  allMdx {
    nodes {
      frontmatter {
        author
        comments
        description
        id
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
