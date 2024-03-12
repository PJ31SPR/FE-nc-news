import axios from 'axios';

const ncNewsApi = axios.create({baseURL : 'https://nc-news-m4pj.onrender.com/api'})

export const getFilteredArticles = ( sort_by, order_by) => {
return ncNewsApi.get('/articles',  { params: {sort_by, order_by}})
.then(({data: {articles}}) => {
    return articles
});
};

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
    .then((article) => {
        return article.data.article
    }).catch((error) => {
        console.log(error, 'err in api.js');
      })
}

export const getCommentsById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
    .then((comments) => {
        // console.log(comments.data.comments, 'comments in api')
        return comments.data.comments
    }).catch((error) => {
        console.log(error, 'err in api.js');
      })
}