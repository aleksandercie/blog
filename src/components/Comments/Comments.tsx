import React, { useState, useMemo, FC } from 'react';
import { CommentsProps } from './models';
import Typography from "../../common/Typography/Typography";
import Container from '../../layout/Container/Container';
import Button from "../../common/Button/Button";
import { BUTTON } from '../../common/Button/models';
import { AllCommentsPageTypes } from '../../@types/content/commentsdetails';
import './Comments.scss';


const Comments: FC<CommentsProps> = ({ defaultComments, id }) => {

    const getComment = typeof defaultComments === 'string' ? [defaultComments] : defaultComments;

    const [comments, setComments] = useState<string[]>(getComment);
    const [newComments, setNewComments] = useState<string>('');

    const submitNewComment = (): void => {
        comments[0] === 'write first comment' ? setComments([newComments]) : setComments([...comments, newComments]);   

        const newCommentObj = {
            id: id,
            comments: [newComments],
        }

        const setLocalStorage = (nameLocalStorage: string, commentData: AllCommentsPageTypes.AllArticleNodes): void => {
            localStorage.setItem(nameLocalStorage, JSON.stringify(commentData));
        } 

        if(localStorage.getItem('commentsData')) {
            const localData: AllCommentsPageTypes.AllArticleNodes = JSON.parse(localStorage.getItem('commentsData'));
            const getComment = localData.filter((comment) => comment.id === id);

            if(getComment[0]) {
                getComment[0].comments.push(newComments);
                setLocalStorage('commentsData', localData);
            } else {
                localData.push(newCommentObj);
                setLocalStorage('commentsData', localData);
            }

        } else {
            setLocalStorage('commentsData', [newCommentObj]);
        }

        setNewComments('');
        
    }

    const renderComments = (): JSX.Element[] => (
        useMemo(() => comments, [comments]).map((comment, index) => 
        <Typography variant="p" customClass="comment" key={index}>{comment}</Typography>
        )
    )

    return(
        <Container customClass="comments">
            {renderComments()}
            <Container customClass="comments__container">
                <Container customClass="comments__input">
                    <label htmlFor="comment">add new comment:</label>
                    <input id="comment" placeholder="write your comment" type="text" onChange={(event) => setNewComments(event.target.value)} value={newComments} />
                </Container>
                <Button variant={BUTTON.VARIANT.PRIMARY} customClass="comments__button" onClick={submitNewComment}>submit</Button>
            </Container>
        </Container>
    )
}

export default Comments;