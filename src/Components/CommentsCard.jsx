import React, {useState, useContext} from 'react';
import { deleteComment } from '../../api';
import UserContext from '../Contexts/UserContext';

const CommentsCard = ({comment, setComments, comments}) => {

    const { currentUser } = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(false)


    const deleteHandler = (event) => {
    event.preventDefault()
    setIsLoading(true)
    const updatedComments = comments.filter((c) => c.comment_id !== comment.comment_id);
    setComments(updatedComments);
    deleteComment(comment.comment_id).then(() => {
        setIsLoading(false)

    })
    }

    return (
        <div className='comment-card'>
          {currentUser === comment.author && (
              <button onClick={deleteHandler} disabled={isLoading} >Delete Comment</button>
            )}
       
       
        {isLoading? (<p>Deleting comment</p>) : ('')}
         <p>Posted by: {comment.author} on {comment.created_at}</p>
         <br />
         <p>{comment.body}</p>
         <br />
         <p>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentsCard;