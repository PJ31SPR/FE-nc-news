import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsById } from "../../api";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import VoteCard from "./VoteCard";
import CommentForm from "./CommentForm";

const ArticlePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  const [article, setArticle] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {article && (
        <div className="single-article">
          <h2>{article.title}</h2>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
          <br></br>
          <span>
            Comments: {article.comment_count} 
          </span>
          <br />
          <VoteCard article={article}/>
          <br />
          <Link to="/articles"> Back</Link>
          <br />
        </div>
      )}
      <div>
        <h3> Join the discussion below </h3>
        <CommentForm  comments={comments} setComments={setComments} article_id={article_id}/>
        {comments.map((comment, index) => (
          <CommentsCard key={index} comment={comment} setComments={setComments} comments={comments}  />
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
