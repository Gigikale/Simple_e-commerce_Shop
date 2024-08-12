<template>
  <div class="shop-img">
    <form class="login-form" @submit.prevent="login">
      <h1 class="form-header">Login Page</h1>
      <div class="login-container">
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
        <div class="mb-6">
          <label for="password">Password</label>
          <input 
            v-model="password" 
            class="input-field"
            id="password" 
            autocomplete="off" 
            type="password" 
            placeholder="********" 
            aria-label="Password"
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
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      successMessage: null,
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      this.successMessage = null;
      if (this.validateForm()) {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            email: this.email,
            password: this.password,
          });

          if (response.data.token) {
            // Save the token (for example, in localStorage)
            localStorage.setItem('token', response.data.token);

            console.log('Login successful', response.data);

           setTimeout(() => {
          window.location.href = '/';
        }, 2000);
          } else {
            console.log('Login failed, show error message');
            // You could set an error message in the component state here
          }
        } catch (error) {
          console.error('An error occurred during login:', error.response?.data || error.message);
          // Show error message to the user
        }
      } else {
        console.log('Form is invalid, show error message');
        // You could set an error message in the component state here
      }
    },
    validateForm() {
      return this.email.trim() !== '' && this.password.trim() !== '';
    },
  },
};
</script>

<style>
.shop-img {
  background-image: url('@/assets/shop.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}

.login-form {
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
  .login-form {
    width: 90%;
    padding: 1.5rem;
  }
}

.form-header {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
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

.success-message {
  color: green;
  margin-bottom: 10px;
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
.success-message {
  color: green;
  margin-top: 1rem;
}
</style>
