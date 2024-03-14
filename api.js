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
        return comments.data.comments
    }).catch((error) => {
        console.log(error, 'err in api.js');
      })
}

export const patchVotes = (article_id, votes) => {
return ncNewsApi.patch(`/articles/${article_id}`, {inc_votes : votes})
}

export const postComment = (article_id, currentUser, postInput) => {
    const newComment = {
        username: currentUser,
        body: postInput
      };
    
    return ncNewsApi.post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      const newComment = response.data.comment
      return newComment
    })
}

export const deleteComment = (comment_id) => {
    return ncNewsApi.delete(`/comments/${comment_id}`) 
}

export const getAllTopics = () => {
    return ncNewsApi.get('/topics')
    .then((response) => {
     return response.data.topics
    })
}

export const getArticlesByTopic = (slug) => {
    return ncNewsApi.get(`/articles?topic=${slug}`)
    .then((response) => {
    return response.data.articles
    })
}

export const getAllUsers = () => {
    return ncNewsApi.get(`/users`)
    .then((response) => {
     return response.data.users
    })
}