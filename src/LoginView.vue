<template>
  <div class="login-form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        />
      </div>
    </form>

    <div class="button-container">
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
      <p class="or-text">or</p>
      <button class="signup-button" @click="goToSignup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle login logic here (e.g., authentication)
      console.log("Login submitted with", this.form);
      alert('Login successful!'); // Replace with actual login logic
    },
    goToSignup() {
      // Navigate to the signup page when the button is clicked
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped>
.login-form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  text-align: left;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px 0px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  background-color: #7ebeb6;
  color: white;
  align-content: center;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
}

.login-button {
  margin-top: 10px;
}

.signup-button {
  margin-top: -10px;
}

.signup-button:hover {
  background-color: #6db2a3;
}

.or-text{
  text-align: center;
}
</style>
