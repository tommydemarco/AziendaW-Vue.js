export default {
    async getEmployees(context) {
        console.log(context.rootGetters['auth/getToken'])
        const response = await fetch('https://djshortcats.website/api/azienda/employees/', {
            method: 'GET',
            headers: { Authorization: `Bearer ${context.rootGetters['auth/getToken']}`}
        })
        if(!response.ok) {
            //error handling here 
        }
        const responseData = await response.json()

        context.commit('getEmployees', responseData)
    }
}