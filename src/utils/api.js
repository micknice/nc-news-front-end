import axios from 'axios';

const niceNewsApi = axios.create({
    baseURL: 'https://nice-news.onrender.com/api',
});

const getTopics = () => {
    return niceNewsApi.get('/topics').then(({data}) => {
        return data.topics
    })
}
const getArticles = () => {
    return niceNewsApi.get('/articles').then(({data}) => {
        return data.articles
    })
}
const getArticlesByTopic = (topic) => {
    const topicStr = topic.toLowerCase()
    return niceNewsApi.get(`/articles?topic=${topicStr}`).then(({data}) => {
        return data.articles
    })
}
const getArticleByArticleId = (articleId) => {
    return niceNewsApi.get(`/articles/${articleId}`).then(({data}) => {
        return data.article
    })
}
const getCommentsByArticleId = (articleId) => {
    return niceNewsApi.get(`/articles/${articleId}/comments`).then(({data}) => {
        return data.comments
    })
}
const postCommentByArticleId = (articleId, username, body) => {
    const reqBody = {username: username, body: body}   
    return niceNewsApi.post(`/articles/${articleId}/comments`, reqBody).then(({data}) => {
        return data.posted_comment
    })
}
const patchVotesByArticleId = (articleId) => {
    const reqBody = {inc_votes: 1}    
    return niceNewsApi.patch(`/articles/${articleId}`,reqBody).then(({data}) => {
        return data.patched_article
    })

}
const getUsers = () => {
    return niceNewsApi.get('/users').then(({data}) => {
        return data.users
    })
}
const deleteCommentByCommentId = (commentId) => {
    return niceNewsApi.delete(`/comments/${commentId}`).then(({data}) => {
        return data.article
    })

}





export { getTopics, getArticles, getArticlesByTopic, getArticleByArticleId, getCommentsByArticleId, postCommentByArticleId, patchVotesByArticleId, getUsers, deleteCommentByCommentId };