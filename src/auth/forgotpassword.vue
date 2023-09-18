<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="sendResetEmail">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <button type="submit">Send Reset Email</button>
      </form>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        successMessage: null,
        errorMessage: null,
      };
    },
    methods: {
      async sendResetEmail() {
        try {
          // Send a request to your API to send a password reset email
          const response = await axios.post('/api/forgot-password', { email: this.email });
  
          // Display a success message to the user
          this.successMessage = 'Password reset email sent. Please check your inbox.';
        } catch (error) {
          // Handle errors
          this.errorMessage = 'Failed to send reset email. Please check your email address.';
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  