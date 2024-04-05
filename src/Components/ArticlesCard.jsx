import React, { useContext } from 'react';
import { styled } from '@mui/system'; // Import styled
import { Link } from 'react-router-dom'; 
import UserContext from '../Contexts/UserContext';

const StyledArticleCard = styled('div')({
    border: '1px solid #ccc', // Add border for card
    borderRadius: '8px', // Add border radius for card
    padding: '1rem', // Add padding for content
    marginBottom: '1rem', // Add margin bottom for spacing
    backgroundColor: '#fff', // White background color
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for elevation
});

const StyledTitle = styled('h2')({
    marginBottom: '0.5rem', // Add margin bottom for spacing
    color: '#6a287e', // Plum text color for static and JavaScript-generated text
    fontFamily: 'Consolas, monospace'
});

const StyledImage = styled('img')({
    width: '100%', // Set the width of the image to fill the container
    height: 'auto', // Auto height to maintain aspect ratio
    marginBottom: '0.5rem', // Add margin bottom for spacing
});

const StyledParagraph = styled('p')({
    marginBottom: '1rem', // Add margin bottom for spacing
    color: '#6a287e', // Plum text color for static and JavaScript-generated text
    fontFamily: 'Consolas, monospace'
});

const StyledLink = styled(Link)({
    backgroundColor: '#6a287e', // Plum color
    color: '#fff', // White text color
    fontFamily: 'Consolas, monospace',
    border: 'none', // Remove border
    padding: '0.5rem 1rem', // Add padding
    borderRadius: '4px', // Add border radius
    cursor: 'pointer', // Add pointer cursor
    transition: 'background-color 0.3s, color 0.3s', // Smooth background color transition
    textDecoration: 'none', // Remove default link underline
    '&:hover': {
        color: '#ffd700', // Yellow text color on hover

    },
});

const ArticlesCard = ({ article, setArticles }) => {
    const { currentUser } = useContext(UserContext);

    return (
        <StyledArticleCard>
            <StyledTitle>{article.title}</StyledTitle>
            <StyledImage src={article.article_img_url} alt={`An image of ${article.title}`} />
            <StyledParagraph>By: {article.author}</StyledParagraph>
            <StyledParagraph>Posted on: {article.created_at}</StyledParagraph>
            <StyledParagraph>Votes: {article.votes}</StyledParagraph>
            <StyledParagraph>Comments: {article.comment_count}</StyledParagraph>
            <StyledLink to={`/articles/${article.article_id}`}>Visit Article</StyledLink>
        </StyledArticleCard>
    );
};

export default ArticlesCard;