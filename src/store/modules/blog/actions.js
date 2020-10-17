export default {
    async fetchArticles(context) {
        const response = await fetch('http://localhost:8000/api/azienda/articles')
        const responseData = await response.json() 
        if(!response.ok) {
            const newError = new Error('There was an erron in fetching the data from the server');
            throw newError 
        }
        context.commit('setArticles', responseData);
    }
}