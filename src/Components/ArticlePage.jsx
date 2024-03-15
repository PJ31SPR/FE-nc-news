import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, getCommentsById } from "../../api";
import Loading from "./Loading";
import ErrorFetch from "./ErrorFetch";

import CommentsCard from "./CommentsCard";
import VoteCard from "./VoteCard";
import CommentForm from "./CommentForm";

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
        setError('Error Fetching Article');
        console.error('Error fetching article:', error)
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
    <>
      {article && (
        <div className="single-article">
          <h2>{article.title}</h2>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
          <br></br>
          <span>Comments: {article.comment_count}</span>
          <br />
          <VoteCard article={article} />
          <br />

          <Link
            to={
              isFromArticlesByTopic
                ? `/articles/topics/${article.topic}`
                : "/articles"
            }
          >
            Back
          </Link>

          <br />
        </div>
      )}
      <div>
        <h3> Join the discussion below </h3>
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
    </>
  );
};

export default ArticlePage;
