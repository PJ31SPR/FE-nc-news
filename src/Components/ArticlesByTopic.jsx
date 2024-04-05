import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../../api";
import { styled } from '@mui/system';
import ErrorFetch from "./ErrorFetch";
import Loading from "./Loading";

const StyledArticlesContainer = styled('div')({
    marginTop: '1rem', // Add top margin for spacing
});

const StyledHeader = styled('h2')({
    color: '#6a287e', // Plum color
    fontFamily: 'Consolas, monospace', // Consolas font family
});

const StyledLink = styled(Link)({
    color: '#6a287e', // Plum color
    fontFamily: 'Consolas, monospace', 
    textDecoration: 'none', // Remove underline
    marginRight: '1rem', // Add right margin for spacing
});

const StyledArticleCard = styled('div')({
    border: '1px solid #ccc', // Add border for card
    borderRadius: '8px', // Add border radius for card
    padding: '1rem', // Add padding for content
    marginBottom: '1rem', // Add margin bottom for spacing
    backgroundColor: '#fff', // White background color
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for elevation
});

const StyledImage = styled('img')({
    maxWidth: '100%', // Ensure image doesn't exceed container width
    borderRadius: '8px', // Add border radius for image
    marginBottom: '0.5rem', // Add margin bottom for spacing
});

const ArticlesByTopic = () => {
  const { slug } = useParams();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(slug)
      .then((articlesByTopic) => {
        setArticles(articlesByTopic);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError("Failed to fetch articles. Please try again later.");
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <ErrorFetch error={error}/>
  }

  return (
    <StyledArticlesContainer>
      <StyledHeader>Articles related to {slug}</StyledHeader>

      <StyledLink to="/topics">Back to All Topics</StyledLink>

      <ul>
        {articles.map((article) => (
          <StyledArticleCard key={article.article_id}>
            <Link to={`/articles/${article.article_id}?source=topics`}>
              <h3>{article.title}</h3>
            </Link>

            <StyledImage src={article.article_img_url} alt={`An image of ${article.title}`} />

            <p>By: {article.author} </p>
            <p>Posted on: {article.created_at} </p>
            <p>Votes: {article.votes} </p>
            <p>Comments: {article.comment_count} </p>
          </StyledArticleCard>
        ))}
      </ul>
    </StyledArticlesContainer>
  );
};

export default ArticlesByTopic;