<template>
<photo-background>
  <div class="login-dark">
    <form @submit.prevent="logginIn">
      <h2 class="text-white text-center mb-3">Login</h2>
      <p v-if="isRerouting" class="text-center">The page that you are trying to access is login-protected.</p>

      <teleport to="body">
        <base-spinnerf v-if="isLoading"></base-spinnerf>
      </teleport>

      <!-- alert if email or password are blank -->
      <base-alert v-if="!isValid" alert-message="Invalid username or password" @close-click="formIsValid"></base-alert>

      <!-- alert for server side errors -->
      <base-alert v-if="errorLogin" :alertMessage="errorMessage" @close-click="formIsValid"></base-alert>

      <div class="form-group">
        <input
          class="form-control"
          type="text"
          name="username"
          placeholder="Email"
          v-model.trim="username"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="Password"
          v-model.trim="password"
        />
      </div>
      <div class="form-group">
        <base-button mode="btn-primary btn-block mb-2" type="submit"
          >Log In</base-button>
      </div>
      <div class="alert alert-warning" role="alert">
        <b>Technical alert:</b> The JWT will not be saved in the local storage.
        Reloading the page when logged in will log you out automatically.
      </div>
    </form>
  </div>
</photo-background>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isValid: true,
      errorLogin: false,
      errorMessage: '',
      isLoading: false,
      isRerouting: false
    };
  },
  created() {
    this.rerouting()
  },
  methods: {
    async logginIn() {
      this.errorLogin = false;
      this.errorMessage = '';
      this.isLoading = true;
      if (this.username === '' || this.password === '') {
        this.isValid = false;
        this.isLoading = false;
        return
      }
      const userCreadentials = {
        username: this.username,
        password: this.password
      }
      try {
        await this.$store.dispatch('auth/logging', userCreadentials)
        //redirecting after login
        const url = '/' + (this.$route.query.redirect) || '';
        this.$router.replace(url)
      } catch(e) {
        this.errorMessage = e.message;
        this.errorLogin = true
      }
      this.isLoading = false;
        
    },
    formIsValid() {
        this.isValid = true
        this.errorLogin = false
    },
    rerouting() {
      if(this.$route.query.redirect) {
        this.isRerouting = true
      }
    }
  },
};
</script>

<style scoped>
.login-dark {
  padding: 50px;
  background-color: rgba(17, 134, 105, 0.6);
  background-size: cover;
  position: relative;
}

.login-dark form {
  max-width: 320px;
  width: 90%;
  background-color: #1e2833;
  padding: 40px;
  border-radius: 4px;
  margin: 0 auto;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.login-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #2980ef;
}

.login-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.login-dark form .btn-primary {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.login-dark form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.login-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-dark form .forgot:hover,
.login-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.login-dark form .btn-primary:active {
  transform: translateY(1px);
}
</style>