import axios from 'axios';

const ncNewsApi = axios.create({baseURL : 'https://nc-news-m4pj.onrender.com/api'})

export const getFilteredArticles = (sort_by, order_by) => {
    return ncNewsApi.get('/articles', { params: { sort_by, order_by } })
      .then(({ data: { articles } }) => articles)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
      .then(({ data }) => data.article)
      .catch(error => {
          throw new Error(error);
      });
  };
  
  export const getCommentsById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
      .then(({ data }) => data.comments)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const patchVotes = (article_id, votes) => {
    return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: votes })
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const postComment = (article_id, currentUser, postInput) => {
    const newComment = {
      username: currentUser,
      body: postInput
    };
  
    return ncNewsApi.post(`/articles/${article_id}/comments`, newComment)
      .then(({ data }) => data.comment)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const deleteComment = (comment_id) => {
    return ncNewsApi.delete(`/comments/${comment_id}`)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const getAllTopics = () => {
    return ncNewsApi.get('/topics')
      .then(({ data }) => data.topics)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const getArticlesByTopic = (slug) => {
    return ncNewsApi.get(`/articles?topic=${slug}`)
      .then(({ data }) => data.articles)
      .catch(error => {
        throw new Error(error);
      });
  };
  
  export const getAllUsers = () => {
    return ncNewsApi.get('/users')
      .then(({ data }) => data.users)
      .catch(error => {
        throw new Error(error);
      });
  };