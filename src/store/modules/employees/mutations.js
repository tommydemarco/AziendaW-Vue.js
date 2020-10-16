export default {
    getEmployees(state, payload) {
        state.employeesList = payload
    },
    getEmployeesToken(state, payload) {
        console.log(payload)
        state.employeesList = payload 
    }
}