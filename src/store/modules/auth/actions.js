import getAPI from '../../../axios-api.js';

export default {
    logging(context, userCredantials) {
        console.log(userCredantials.username, userCredantials.password)
        getAPI.post('/api/token/', {
            username: userCredantials.username,
            password: userCredantials.password
        }).then(response => {
            if(!response.ok || response.status != 200) {
                throw Error('Username or password invalid')
            }
            console.log(response)
            context.commit('tokenOperations', { access: response.data.access, refresh: response.data.refresh })
        }).catch(e => console.log(e))
    }
}