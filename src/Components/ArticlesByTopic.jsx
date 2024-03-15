import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../../api";
import "./TopicsCard.css";
import ErrorFetch from "./ErrorFetch";

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
    return <p>Loading articles...</p>;
  }


  if (error) {
    <ErrorFetch error={error}/>
  }


  return (
    <div>
      <h2>Articles related to {slug}</h2>

      <Link to="/topics">Back to All Topics</Link>

      <ul>
        {articles.map((article) => (
          <div key={article.article_id} className="topics-card">
            <Link to={`/articles/${article.article_id}?source=topics`}>
              <h3>{article.title}</h3>
            </Link>

            <img src={article.article_img_url} alt={article.title} />
            <p>By: {article.author} </p>
            <p>Posted on: {article.created_at} </p>
            <p>Votes: {article.votes} </p>
            <p>Comments: {article.comment_count} </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesByTopic;
