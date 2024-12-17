<template>
  <div class="signup-form-container">
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

      <div class="form-group">
        <button type="submit">Sign Up</button>
      </div>
    </form>

    <div v-if="submitted">
      <div v-if="isPasswordValid">
        <p class="success-message">Password is valid. You can proceed with signing up!</p>
      </div>
      <div v-else>
        <p class="error-message">The password is not valid. Please check the following:</p>
        <ul>
          <li v-if="!passwordLengthValid">- At least 8 characters and less than 15 characters.</li>
          <li v-if="!passwordUppercase">- At least one uppercase letter.</li>
          <li v-if="!passwordLowercase">- At least two lowercase letters.</li>
          <li v-if="!passwordNumeric">- At least one numeric value.</li>
          <li v-if="!passwordStartsUppercase">- Password must start with an uppercase letter.</li>
          <li v-if="!passwordContainsUnderscore">- Must include the character "_".</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  computed: {
    isPasswordValid() {
      return (
        this.passwordLengthValid &&
        this.passwordUppercase &&
        this.passwordLowercase &&
        this.passwordNumeric &&
        this.passwordStartsUppercase &&
        this.passwordContainsUnderscore
      );
    },
    passwordLengthValid() {
      const password = this.form.password;
      return password.length >= 8 && password.length <= 15;
    },
    passwordUppercase() {
      return /[A-Z]/.test(this.form.password);
    },
    passwordLowercase() {
      return /[a-z].*[a-z]/.test(this.form.password);
    },
    passwordNumeric() {
      return /\d/.test(this.form.password);
    },
    passwordStartsUppercase() {
      return /^[A-Z]/.test(this.form.password);
    },
    passwordContainsUnderscore() {
      return /_/.test(this.form.password);
    },
  },
  methods: {
    async submitForm() {
    this.submitted = true;

    if (this.isPasswordValid) {
      try {
        const response = await fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: 'include',
          body: JSON.stringify(this.form),
        });

        if (!response.ok) {
          // Check Content-Type to decide how to parse the response
          const contentType = response.headers.get("Content-Type");
          let errorMessage = "Signup failed!";
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
          } else {
            errorMessage = await response.text(); // Fallback to plain text
          }
          if (errorMessage.includes("duplicate key value violates unique constraint")) {
            alert("This email is already in use. Please try a different one.");
          } else {
            alert(errorMessage);
          }
          return;
        }

        // On successful signup
        const data = await response.json();
        console.log("Success:", data);
        this.$router.push("/");
      } catch (err) {
        console.error("Signup error:", err);
        alert("An unexpected error occurred: " + err.message);
      }
    }
  },
},
};
</script>


<style scoped>
.signup-form-container {
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
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.success-message {
  color: green;
  font-weight: bold;
}

.error-message {
  color: red;
}

ul {
  margin-top: 10px;
}
</style>  
