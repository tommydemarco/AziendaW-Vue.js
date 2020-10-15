//import getAPI from '../../../axios-api.js';

export default {
    // getEmployees(context) {
    //     getAPI.get('employees/')
    //         .then(response => console.log(response))
    //     console.log(context)
    // }
    async getEmployees(context) {
        const response = await fetch('http://localhost:8000/api/azienda/employees/')
        if(!response.ok) {
            //error handling here 
        }
        console.log('Fetching employees')
        const responseData = await response.json()

        context.commit('getEmployees', responseData)
    }
}