import React, {useState, useContext, useEffect} from 'react';
import UserContext from '../Contexts/UserContext';
import { postComment } from '../../api';


const CommentForm = ({ comments, setComments, article_id }) => {

    const [isLoading, setIsLoading] = useState(false)

    const { currentUser } = useContext(UserContext)

    const [postInput, setPostInput] = useState('')

    const [isSuccess, setIsSuccess] = useState(false);
    
    const changePostInput = (event) => {
     setPostInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        setIsSuccess(false)
        postComment(currentUser, postInput, article_id).then((newComment) => {
            setComments((previousComments) => [newComment, ...previousComments]);
            setIsLoading(false)
            setIsSuccess(true);
            setTimeout(() => {

                setIsSuccess(false);
            }, 2000);
        setPostInput('')
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                <label  htmlFor="username"> Username:</label>
                <p> {currentUser} </p>
                <label htmlFor="comment" > Comment:</label>
                <textarea type='text' value={postInput} onChange={changePostInput} required> </textarea>
                </div>
                <button type="submit" disabled={isLoading}>  {isLoading ? 'Submitting...' : 'Submit'} </button>
                {isSuccess? (<p>Comment posted successfully!</p>) : ('') } 
            </form>
            
        </>
    );
};

export default CommentForm;