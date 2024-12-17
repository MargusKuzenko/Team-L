<template>
  <div class="login-form-container">
    <form @submit.prevent="submitForm">
      <!-- Email Input -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
        />
      </div>

      <!-- Password Input -->
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>

    <!-- Sign Up Section -->
    <div class="button-container">
      <p class="or-text">or</p>
      <button class="signup-button" @click="goToSignup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Handle login submission
    submitForm() {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.form),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Login failed!");
          return response.json();
        })
        .then((data) => {
          alert("Login successful: " + data.message);
          console.log("Login success:", data);
          // TODO: Add redirect or store auth token here
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("Login failed: " + err.message);
        });
    },
    // Navigate to the signup page
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.login-form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Form Group Styling */
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

/* Buttons */
button {
  background-color: #7ebeb6;
  color: white;
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

.or-text {
  text-align: center;
}
</style>
