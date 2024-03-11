import axios from 'axios';

const ncNewsApi = axios.create({baseURL : 'https://nc-news-m4pj.onrender.com/api'})

export const getFilteredArticles = ( sort_by, order_by) => {
return ncNewsApi.get('/articles',  { params: {sort_by, order_by}})
.then(({data: {articles}}) => {
    return articles
});
};
