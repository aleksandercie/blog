import { FluidObject } from 'gatsby-image';

export declare namespace AllArticlesPageTypes {

    type AllArticleDetailsType = {
        author: string;
        comments: string | string[];
        description: string;
        id: number;
        title: string;
        slug: string;
        featuredImage: {
            childImageSharp: {
                fluid: FluidObject;
            }
        }
    }
    
    type AllArticleNodes = {
        frontmatter: AllArticleDetailsType;
    }

    type AllArticleSiteType = {
        allMdx: {
            nodes: AllArticleNodes[];
        }
    }
}




