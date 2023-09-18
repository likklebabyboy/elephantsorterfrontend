<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <button type="submit">Register</button>
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
          name: '',
          email: '',
          password: '',
        },
        errorMessage: null,
      };
    },
    methods: {
      async register() {
        try {
          // Send registration request to your API
          const response = await axios.post('/api/register', this.formData);
  
          // Assuming your API returns a token on successful registration
          const { token, user } = response.data;
  
          // Store the token and user data in local storage or Vuex store
          localStorage.setItem('token', token);
          // You can store user data as well, depending on your needs
  
          // Redirect the user to the dashboard or another protected route
          this.$router.push('/dashboard');
        } catch (error) {
          // Handle registration errors
          this.errorMessage = 'Registration failed. Please check your information.';
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  