import React, {useState, useContext, useEffect} from 'react';
import UserContext from '../Contexts/UserContext';
import { postComment } from '../../api';
import ErrorFetch from './ErrorFetch';


const CommentForm = ({ comments, setComments, article_id }) => {

    const [isLoading, setIsLoading] = useState(false)

    const { currentUser } = useContext(UserContext)

    const [postInput, setPostInput] = useState('')

    const [isSuccess, setIsSuccess] = useState(false);

    const [error, setError] = useState(null);
    
    const changePostInput = (event) => {
     setPostInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!currentUser.username) {
            setError('Please log in to comment');
            setTimeout(() => {

                setError(null);
            }, 2000);
            setIsLoading(false);
            return;
          }

        setIsLoading(true)
        setIsSuccess(false)
        postComment(article_id, currentUser.username, postInput).then((newComment) => {
            setComments((previousComments) => [newComment, ...previousComments]);
            setIsLoading(false)
            setIsSuccess(true);
            setTimeout(() => {

                setIsSuccess(false);
            }, 2000);
        setPostInput('')
        setError(null)
        })
        .catch((error) => {
            console.error('Error posting comment:', error);
            setError('Failed to post comment. Please try again later.');
            setIsLoading(false);
        });
    }

    if (error) {
        return <ErrorFetch error={error} />; 
      }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                <label  htmlFor="username"> Username:</label>
                <p> {currentUser.username} </p>
                <label htmlFor="comment" > Comment:</label>
                <textarea id='comment' type='text' value={postInput} onChange={changePostInput} required> </textarea>
                </div>
                <button type="submit" disabled={isLoading} aria-label="Submit Comment">  {isLoading ? 'Submitting...' : 'Submit'} </button>
                {isSuccess? (<p>Comment posted successfully!</p>) : ('') } 
            </form>
            
        </>
    );
};

export default CommentForm;