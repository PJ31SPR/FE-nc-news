
import React, { useState, useContext } from 'react';
import { styled } from '@mui/system'; // Import styled from MUI
import { Button, Typography, TextField } from '@mui/material'; // Import Button, Typography, and TextField from MUI
import UserContext from '../Contexts/UserContext';
import { postComment } from '../../api';
import ErrorFetch from './ErrorFetch';

const StyledFormContainer = styled('div')({
  // Apply styles for the form container
  padding: '1rem', // Add padding
});

const StyledLabel = styled('label')({
  // Apply styles for the label
  display: 'block', // Display as block element
  marginBottom: '0.5rem', // Add margin bottom for spacing
  color: '#6a287e', // Plum text color
});

const StyledTypography = styled(Typography)({
  color: '#6a287e',
})

const StyledInputContainer = styled('div')({
  // Apply styles for the input container
  marginBottom: '1rem', // Add margin bottom for spacing
});

const StyledTextarea = styled(TextField)({
    // Apply styles for the textarea
    width: '100%', // Set width to 100% of container
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffd700', // Set border color when focused
      },
    },
  });

const StyledButton = styled(Button)({
  // Apply styles for the button
  backgroundColor: '#6a287e', // Plum color
  color: '#fff', // White text color
  '&:hover': {
    backgroundColor: '#ffd700', // Yellow color on hover
  },
});

const CommentForm = ({ comments, setComments, article_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postInput, setPostInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(UserContext);

  const changePostInput = (event) => {
    setPostInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!currentUser.username) {
      setError('Please log in to comment');
      setTimeout(() => {
        setError(null);
      }, 2000);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    postComment(article_id, currentUser.username, postInput)
      .then((newComment) => {
        setComments((previousComments) => [newComment, ...previousComments]);
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
        setPostInput('');
        setError(null);
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
        setError('Failed to post comment. Please try again later.');
        setIsLoading(false);
      });
  };

  if (error) {
    return <ErrorFetch error={error} />;
  }

  return (
    <StyledFormContainer>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="username">Username:</StyledLabel>
        <StyledTypography>{currentUser.username}</StyledTypography>
        <StyledInputContainer>
          <StyledLabel htmlFor="comment">Comment:</StyledLabel>
          <StyledTextarea
            id="comment"
            value={postInput}
            onChange={changePostInput}
            multiline
            rows={4}
            variant="outlined"
            required
          />
        </StyledInputContainer>
        <StyledButton
          type="submit"
          disabled={isLoading}
          aria-label="Submit Comment"
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </StyledButton>
        {isSuccess ? <StyledTypography>Comment posted successfully!</StyledTypography> : null}
      </form>
    </StyledFormContainer>
  );
};

export default CommentForm;