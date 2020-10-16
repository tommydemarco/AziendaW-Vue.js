export default {
    setToken(state, payload) {
        state.accessToken = payload.access;
        state.refreshToken = payload.refresh;
    }
}