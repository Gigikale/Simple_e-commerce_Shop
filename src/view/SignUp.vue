<template>
  <div class="login-img">
    <form class="signup-form" @submit.prevent="signup">
      <h1 class="form-header">SignUp</h1>
      <div class="signup-container">
        <div class="mb-3">
          <label for="fullName">Full Name</label>
          <input 
            v-model="fullName" 
            class="input-field"
            id="fullName" 
            autocomplete="off" 
            type="text" 
            placeholder="John Doe" 
            aria-label="fullName"
          />
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <input 
            v-model="email" 
            class="input-field"
            id="email" 
            autocomplete="off" 
            type="email" 
            placeholder="example@gmail.com" 
            aria-label="email"
          />
        </div>
        <div class="mb-5">
          <label for="username">Username</label>
          <input 
            v-model="username" 
            class="input-field"
            id="username" 
            autocomplete="off" 
            type="text" 
            placeholder="johndoe123" 
            aria-label="username"
          />
        </div>
        <div class="mb-6">
          <label for="password">Password</label>
          <input 
            v-model="password" 
            class="input-field"
            id="password" 
            autocomplete="off" 
            type="password" 
            placeholder="********" 
            aria-label="password"
          />
        </div>
        <div class="mb-7">
          <label for="confirmPassword">Confirm Password</label>
          <input 
            v-model="confirmPassword" 
            class="input-field"
            id="confirmPassword" 
            autocomplete="off" 
            type="password" 
            placeholder="********" 
            aria-label="confirmPassword"
          />
        </div>
        <div class="flex items-center justify-between">
          <button 
            class="submit-button" 
            type="submit"
          >
            Submit
          </button>
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  },
  methods: {
    async signup() {
      this.error = null;
      // Simple validation
      if (!this.fullName || !this.email || !this.username || !this.password || !this.confirmPassword) {
        this.error = 'All fields are required.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }
      try {
        // Mock API request
        const response = await fetch('http://localhost:8085/signup/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            password: this.password,
          }),
        });
        console.log(response);

        if (!response.ok) {
          throw new Error('Signup failed');
        }

        const data = await response.json();
        console.log('Signup successful', data);
        // Redirect or perform other actions upon successful signup
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style>
.login-img {
  background-image: url('@/assets/LoginImg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}

.signup-form {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 400px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .signup-form {
    width: 90%;
    padding: 1.5rem;
  }
}

.form-header {
  font-size: 2rem; /* Increase the font size */
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.label {
  display: block; /* Ensure labels are block elements */
  text-align: left; /* Align labels to the left */
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-field {
  box-shadow: none;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.submit-button {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
