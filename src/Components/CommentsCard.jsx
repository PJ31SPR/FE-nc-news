import React, {useState, useContext} from 'react';
import { deleteComment } from '../../api';
import UserContext from '../Contexts/UserContext';
import ErrorFetch from './ErrorFetch';

const CommentsCard = ({comment, setComments, comments}) => {

    const { currentUser } = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);


    const deleteHandler = (event) => {
    setIsLoading(true)
    const updatedComments = comments.filter((c) => c.comment_id !== comment.comment_id);
    setComments(updatedComments);
    deleteComment(comment.comment_id).then(() => {
        setIsLoading(false)
    })
    .catch((error) => {
        console.error('Error deleting comment:', error);
        setError('Failed to delete comment. Please try again later.');
        setIsLoading(false);
    });
    }

    if (error) {
        return <ErrorFetch error={error} />; 
      }

    
    return (
        <article className='comment-card'>
       
          {currentUser.username === comment.author && (
              <button onClick={deleteHandler} disabled={isLoading} aria-label="Delete Comment" >Delete Comment</button>
              )}
       
              {isLoading? (<p>Deleting comment</p>) : ('')}
       
         <p>Posted by: {comment.author} on {comment.created_at}</p>
         <br />
         <p>{comment.body}</p>
         <br />
         <p>Votes: {comment.votes}</p>
        </article>
    );
};

export default CommentsCard;