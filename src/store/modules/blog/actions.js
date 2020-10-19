export default {
    async fetchArticles(context) {
        const response = await fetch('https://djshortcats.website/api/azienda/articles')
        const responseData = await response.json() 
        if(!response.ok) {
            const newError = new Error('There was an erron in fetching the data from the server');
            throw newError 
        }
        context.commit('setArticles', responseData);
    },
    async loadSingleArticle(context, id) {
        const response = await fetch('https://djshortcats.website/api/azienda/articles')
        const responseData = await response.json() 
        if(!response.ok) {
            const newError = new Error('There was an erron in fetching the data from the server');
            throw newError 
        }
        const singleArticle = responseData.filter(article => article.id == id)
        context.commit('loadSingleArticle', singleArticle[0])
    }
}