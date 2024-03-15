import React, { useState } from 'react';
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext';
import { Link } from 'react-router-dom'; 


const ArticlesCard = ({ article, setArticles }) => {
    const { currentUser } = useContext(UserContext)

    return (
        <div className='article-card' >
            <h2>{article.title} </h2>  
            <img src={article.article_img_url} alt={`An image of ${article.title}`} />
            <p>By: {article.author} </p>
            <p>Posted on: {article.created_at} </p>
            <p>Votes: {article.votes} </p>
            <p>Comments: {article.comment_count} </p>
            <Link to= {`/articles/${article.article_id}`} >Visit Article</Link>
        </div>
   

    );
};

export default ArticlesCard;