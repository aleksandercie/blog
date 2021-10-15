import React, {FC } from 'react';
import { graphql } from "gatsby";
import { ArticleProps } from './models';
import Post from '../../components/Post/Post';

const ArticleDetailsPage: FC<ArticleProps> = ({ data }) => {
    const { mdx: article } = data
    return (
        <>
          <Post article={article.frontmatter} />
        </>
    )
}

export const query = graphql`
    query ($slug: String!){
      mdx(slug: {eq: $slug}) {
        frontmatter {
          title
          slug
          id
          description
          comments
          author
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
`

export default ArticleDetailsPage;