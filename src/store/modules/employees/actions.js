export default {
    async getEmployees(context) {
        const response = await fetch('https://djshortcats.website/api/azienda/employees/', {
            method: 'GET',
            headers: { Authorization: `Bearer ${context.rootGetters['auth/getToken']}`}
        })
        if(!response.ok) {
            const newError = new Error('Something went wrong');
            throw newError
        }
        const responseData = await response.json()

        context.commit('getEmployees', responseData)
    }
}