export default {
    async logging(context, userCredantials) {
        const response = await fetch('https://djshortcats.website/api/azienda/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: userCredantials.username,
                password: userCredantials.password
            })
        })
        const responseData = await response.json()

        if(!response.ok) {
            if (response.status == 401) {
                const unauthErr = new Error('Wrong username or password')
                throw unauthErr
            } else {
                const LoginError = new Error('Could not login at the moment.')
                throw LoginError
            }
        }

        // localStorage.setItem('accessToken', responseData.access)
        // localStorage.setItem('refreshToken', responseData.refresh)

        //responseData returns an Object with two values: access token and refresh token
        context.commit('setToken', responseData)
    },
    tryLogin(context) {
        const access = localStorage.getItem('accessToken');
        const refresh = localStorage.getItem('refreshToken')

        if (access && refresh) {
            context.commit('setToken', {
                access: access,
                refresh: refresh
            })
        }
        
    },
    logout(context) {
        // localStorage.removeItem('accessToken')
        // localStorage.removeItem('refreshToken')

        context.commit('setToken', {
            access: null,
            refresh: null
        })
    }
}