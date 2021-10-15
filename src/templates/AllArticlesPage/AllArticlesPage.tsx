import React, { FC } from 'react';
import { AllArticlesProps } from './models';
import Layout from '../../layout/Layout/Layout';
import Post from '../../components/Post/Post';
import Typography from "../../common/Typography/Typography";
import Container from "../../layout/Container/Container";
import './AllArticlesPage.scss';

const AllArticlesPage: FC<AllArticlesProps> = ({ data }) => {

  const { allMdx: {nodes} } = data;

  const articles: JSX.Element[] = nodes.map((article) => <Post key={article.frontmatter.id} article={article.frontmatter} link />);
  
  return (
    <Layout>
      <Container customClass="articles-page">
        <Typography variant="h1" bold align="center">Blog travel</Typography>
        <Container customClass="articles-page__posts">
          {articles}
        </Container>
      </Container>
    </Layout>
  )
}

export default AllArticlesPage;