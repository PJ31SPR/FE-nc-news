import React, { useEffect, useState } from 'react';
import { getFilteredArticles } from '../../api';
import ArticlesList from './ArticlesList';
import Filters from './Filters';
import Loading from './Loading';
import ErrorFetch from './ErrorFetch';

const Articles = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 

    const [filters, setFilter] = useState({
         sort_by: 'created_at',
         order_by: 'desc'
    });


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getFilteredArticles(filters.sort_by, filters.order_by)
        .then((articlesFromAPI) => {
            setArticles(articlesFromAPI);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching articles:', error);
            setError('Failed to fetch articles. Please try again later.'); 
            setIsLoading(false);
        });
    }, [filters]);

    if (error) {
        return <ErrorFetch error={error} />; 
      }
   
    return (
        <div>
        <Filters setFilter={setFilter} />
        {isLoading ? (
            <Loading />
        ) : (
            <ArticlesList articles={articles} setArticles={setArticles} />
        )}
        </div>
    );
};

export default Articles;