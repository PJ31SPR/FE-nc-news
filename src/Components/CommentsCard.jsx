// import React, {useState, useContext} from 'react';
// import { deleteComment } from '../../api';
// import UserContext from '../Contexts/UserContext';
// import ErrorFetch from './ErrorFetch';

// const CommentsCard = ({comment, setComments, comments}) => {

//     const { currentUser } = useContext(UserContext)

//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null);


//     const deleteHandler = (event) => {
//     setIsLoading(true)
//     const updatedComments = comments.filter((c) => c.comment_id !== comment.comment_id);
//     setComments(updatedComments);
//     deleteComment(comment.comment_id).then(() => {
//         setIsLoading(false)
//     })
//     .catch((error) => {
//         console.error('Error deleting comment:', error);
//         setError('Failed to delete comment. Please try again later.');
//         setIsLoading(false);
//     });
//     }

//     if (error) {
//         return <ErrorFetch error={error} />; 
//       }

    
//     return (
//         <article className='comment-card'>
       
//           {currentUser.username === comment.author && (
//               <button onClick={deleteHandler} disabled={isLoading} aria-label="Delete Comment" >Delete Comment</button>
//               )}
       
//               {isLoading? (<p>Deleting comment</p>) : ('')}
       
//          <p>Posted by: {comment.author} on {comment.created_at}</p>
//          <br />
//          <p>{comment.body}</p>
//          <br />
//          <p>Votes: {comment.votes}</p>
//         </article>
//     );
// };

// export default CommentsCard;

import React, { useState, useContext } from 'react';
import { styled } from '@mui/system'; // Import styled from MUI
import { Button, Typography } from '@mui/material'; // Import Button and Typography from MUI
import { deleteComment } from '../../api';
import UserContext from '../Contexts/UserContext';
import ErrorFetch from './ErrorFetch';

const StyledCommentCard = styled('article')({
  border: '1px solid #ccc', // Add border for card
  borderRadius: '8px', // Add border radius for card
  padding: '1rem', // Add padding for content
  marginBottom: '1rem', // Add margin bottom for spacing
  backgroundColor: '#6a287e', // White background color
  
});

const StyledButton = styled(Button)({
  // Apply styles for the button
  backgroundColor: '#fff', // Plum color
  color: '#6a287e', // White text color
  '&:hover': {
    backgroundColor: '#ffd700', // Yellow color on hover
  },
});

const StyledTypography = styled('p')({
    color: '#fff',
    fontFamily: 'Consolas, monospace'
})

const CommentsCard = ({ comment, setComments, comments }) => {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteHandler = () => {
    setIsLoading(true);
    const updatedComments = comments.filter((c) => c.comment_id !== comment.comment_id);
    setComments(updatedComments);
    deleteComment(comment.comment_id)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error deleting comment:', error);
        setError('Failed to delete comment. Please try again later.');
        setIsLoading(false);
      });
  };

  if (error) {
    return <ErrorFetch error={error} />;
  }

  return (
    <StyledCommentCard>
      {currentUser.username === comment.author && (
        <StyledButton onClick={deleteHandler} disabled={isLoading} aria-label="Delete Comment">
          {isLoading ? 'Deleting comment...' : 'Delete Comment'}
        </StyledButton>
      )}
      <StyledTypography>Posted by: {comment.author} on {comment.created_at}</StyledTypography>
      <br />
      <StyledTypography>{comment.body}</StyledTypography>
      <br />
      <StyledTypography>Votes: {comment.votes}</StyledTypography>
    </StyledCommentCard>
  );
};

export default CommentsCard;