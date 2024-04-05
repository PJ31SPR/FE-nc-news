import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, getCommentsById } from "../../api";
import { styled } from "@mui/system"; 
import { Button } from "@mui/material"; 
import Loading from "./Loading";
import ErrorFetch from "./ErrorFetch";

import CommentsCard from "./CommentsCard";
import VoteCard from "./VoteCard";
import CommentForm from "./CommentForm";

const StyledArticleContainer = styled("div")({
  padding: "1rem",
  fontFamily: 'Consolas, monospace',
});

const StyledTitle = styled("h2")({
  color: "#6a287e",
  marginBottom: "1rem",
  fontFamily: 'Consolas, monospace'
});

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "1rem",
});

const StyledCommentsCount = styled("span")({
  color: "#6a287e",
  fontFamily: 'Consolas, monospace',
  marginBottom: '2rem', 
});

const StyledBackLink = styled(Link)({
  color: "#6a287e",
  textDecoration: "none",
  "&:hover": {
    color: "#ffd700",
  },
});

const StyledButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});

const StyledButton = styled(Button)({
  backgroundColor: "#6a287e",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ffd700",
  },
  margin: "0 0.5rem",
});

const StyledArticleBody = styled("p")({
  color: "#6a287e",
  fontFamily: 'Consolas, monospace'
});

const StyledDiscussionHeader = styled("h3")({
  color: "#6a287e",
  marginBottom: "1rem",
  fontFamily: 'Consolas, monospace'
});


const ArticlePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isFromArticlesByTopic, setIsFromArticlesByTopic] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Error Fetching Article");
        console.error("Error fetching article:", error);
      });
  }, [article_id]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsFromArticlesByTopic(urlParams.get("source") === "topics");
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorFetch error={error} />;
  }

  return (
    <StyledArticleContainer>
      {article && (
        <>
          <StyledTitle>{article.title}</StyledTitle>
          <StyledImage src={article.article_img_url} alt={`An image of ${article.title}`} />
          <StyledArticleBody>{article.body}</StyledArticleBody>
          <br />
          <StyledCommentsCount>Comments: {article.comment_count}</StyledCommentsCount>
          <br />
          <VoteCard article={article} />
          <StyledButtonContainer>
            <StyledButton
              component={Link}
              to={
                isFromArticlesByTopic
                  ? `/articles/topics/${article.topic}`
                  : "/articles"
              }
            >
              Back
            </StyledButton>
          </StyledButtonContainer>
          <br />
        </>
      )}
      <div>
      <StyledDiscussionHeader> Join the discussion below </StyledDiscussionHeader>
        {comments.length === 0 && <p>Be the first to comment!</p>}
        <CommentForm
          comments={comments}
          setComments={setComments}
          article_id={article_id}
        />
        {comments.map((comment, index) => (
          <CommentsCard
            key={index}
            comment={comment}
            setComments={setComments}
            comments={comments}
          />
        ))}
      </div>
    </StyledArticleContainer>
  );
};

export default ArticlePage;