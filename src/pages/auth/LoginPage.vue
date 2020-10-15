<template>
<photo-background>
  <div class="login-dark">
    <form @submit.prevent="logginIn">
      <h2 class="text-white text-center mb-3">Login</h2>

      <!-- alert for form is invalid -->
      <div v-if="!isValid" class="alert alert-warning alert-dismissible fade show" role="alert">
        Invalid email or password
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="formIsValid"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
          v-model.trim="email"
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
        <base-button mode="btn-primary btn-block" type="submit"
          >Log In</base-button
        >
      </div>
    </form>
  </div>
</photo-background>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isValid: true,
    };
  },
  methods: {
    logginIn() {
      if (this.email === '' || this.password === '') {
        this.isValid = false;
      }
    },
    formIsValid() {
        this.isValid = true 
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