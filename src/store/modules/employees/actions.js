//import getAPI from '../../../axios-api.js';

export default {
    // getEmployees(context) {
    //     getAPI.get('employees/')
    //         .then(response => console.log(response))
    //     console.log(context)
    // }
    async getEmployees(context) {
        console.log(context.rootGetters['auth/getToken'])
        const response = await fetch('http://localhost:8000/api/azienda/employees/', {
            method: 'GET',
            headers: { Authorization: `Bearer ${context.rootGetters['auth/getToken']}`}
        })
        if(!response.ok) {
            //error handling here 
        }
        console.log('Fetching employees')
        const responseData = await response.json()

        context.commit('getEmployees', responseData)
    }
}