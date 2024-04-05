import React from 'react';
import { styled } from '@mui/system'; // Import styled from MUI
import { Link } from 'react-router-dom'; 

const StyledTopicsCard = styled('div')({
  border: '1px solid #ccc', // Add border for card
  borderRadius: '8px', // Add border radius for card
  padding: '1rem', // Add padding for content
  marginBottom: '1rem', // Add margin bottom for spacing
  backgroundColor: '#6a287e', // Plum background color
  color: '#fff', // White text color
  fontFamily: 'Consolas, monospace', // News style font
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for elevation
});

const StyledLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  color: '#ffd700', // Yellow color
  transition: 'color 0.3s', // Smooth color transition
  '&:hover': {
    color: '#f4d03f', // Lighter yellow color on hover
    textDecoration: 'underline',
  },
});

const TopicsCard = ({ topic }) => {
    
  return (
    <StyledTopicsCard role="listitem">
      <h2>{topic.slug}</h2>
      <p>{topic.description}</p>
      <StyledLink to={`/articles/topics/${topic.slug}`} tabIndex="0">See related articles</StyledLink>
    </StyledTopicsCard>
  );
};

export default TopicsCard;