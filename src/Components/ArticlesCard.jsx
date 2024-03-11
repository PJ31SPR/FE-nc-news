import React, { useState } from 'react';
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext';


const ArticlesCard = ({ article, setArticles }) => {
    const { currentUser } = useContext(UserContext)

    return (
        <div className='article-card' >
            <h2>{article.title} </h2>  
            <img src={article.article_img_url} alt={article.title} />
            <p>By: {article.author} </p>
            <p>Posted on: {article.created_at} </p>
            <p>Votes: {article.votes} </p>
            <p>Comments: {article.comment_count} </p>
        </div>
   

    );
};

export default ArticlesCard;