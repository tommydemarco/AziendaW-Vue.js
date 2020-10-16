export default {
    tokenOperations(state, payload) {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
    }
}