export default {
    getToken(state) {
        return state.accessToken
    },
    isAuthenticated(state) {
        return !!state.accessToken
    },
}