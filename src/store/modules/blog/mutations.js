export default {
    setSingleArticle(state, id) {
        state.singleArticle = state.blogArticles.find(article => article.id == id)
    },
    setArticles(state, payload) {
        state.blogArticles = payload
    },
    loadSingleArticle(state, payload) {
        state.singleArticle = payload
    }

}