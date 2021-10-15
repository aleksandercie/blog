import React, { FC } from 'react';
import { PostProps } from './models';
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typography from "../../common/Typography/Typography";
import Container from '../../layout/Container/Container';
import Comments from "../Comments/Comments";
import Button from '../../common/Button/Button';
import { BUTTON } from '../../common/Button/models';
import { AllCommentsPageTypes } from '../../@types/content/commentsdetails';
import './Post.scss';


const Post: FC<PostProps> = ({ article, link}) => {

    let {id, slug, title, description, author, comments, featuredImage } = article;
    
    const localData:  AllCommentsPageTypes.AllArticleNodes = JSON.parse(localStorage.getItem('commentsData'));

    if(localData){
        localData.filter((comment) => comment.id === id && (comments = comment.comments));
    }

    const renderArticleInfo = (): JSX.Element => (
        <Container>
            <Img fluid={featuredImage.childImageSharp.fluid} />
            <Container customClass="post__info">
                <Typography variant="h2" customClass="post__title">{title}</Typography>
                <Typography variant="p" customClass="post__description" grey>{description}</Typography>
                <Typography variant="h3" customClass="post__author" align="right">{author}</Typography>
            </Container>
        </Container>
    )
    const renderArticle: JSX.Element = link ? 
        <Link to={slug} className="post__link">
            {renderArticleInfo()}
        </Link>
    :
        <Container customClass="post__wrapper">
            {renderArticleInfo()}
            <Comments defaultComments={comments} id={id} />
            <Link to='/' className="post__link--homepage">
               <Button variant={BUTTON.VARIANT.SECONDARY} customClass="post__button">homepage</Button> 
            </Link>
        </Container>

    return (
        <Container customClass="post">{renderArticle}</Container>
    )
}

export default Post

