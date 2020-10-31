export default {
    getEmployees(state, payload) {
        state.employeesList = payload
    },
    getEmployeesToken(state, payload) {
        state.employeesList = payload 
    }
}