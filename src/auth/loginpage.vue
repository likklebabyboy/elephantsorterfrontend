<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
        errorMessage: null,
      };
    },
    methods: {
      async login() {
        try {
          // Send login request to your API
          const response = await axios.post('/api/login', this.formData);
  
          // Assuming your API returns a token on successful login
          const { token, user } = response.data;
  
          // Store the token and user data in local storage or Vuex store
          localStorage.setItem('token', token);
          // You can store user data as well, depending on your needs
  
          // Redirect the user to the dashboard or another protected route
          this.$router.push('/dashboard');
        } catch (error) {
          // Handle login errors
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  