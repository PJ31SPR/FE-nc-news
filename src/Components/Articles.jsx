import React, { useEffect, useState } from 'react';
import { getFilteredArticles } from '../../api';
import ArticlesList from './ArticlesList';
import Filters from './Filters';
import Loading from './Loading';


const Articles = () => {

    const [filters, setFilter] = useState({
         sort_by: 'created_at',
         order_by: 'desc'
    });

    const [isLoading, setIsLoading] = useState(true);

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getFilteredArticles(filters.sort_by, filters.order_by)
        .then((articlesFromAPI) => {
            setArticles(articlesFromAPI);
            setIsLoading(false);
        });
    }, [filters]);


   
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