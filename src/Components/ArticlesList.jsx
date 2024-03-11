import React from 'react';
import ArticlesCard from './ArticlesCard';

const ArticlesList = ({ articles, setArticles }) => {

 
    return (
        <ul>
            {articles.map((article) => (
                <ArticlesCard key={article.article_id} article={article} setArticles={setArticles} />
            ))}
        </ul>
  
    );
};

export default ArticlesList;