<template>
  <div class="create-artist-container">
    <link rel="icon" type="image/svg+xml" href="/src/assets/elly.svg" />

    <h2 class="create-artist-heading">Create New Artist</h2>
    <form @submit.prevent="createArtist" class="artist-form">
      <div class="form-group">
        <label for="name" class="form-label">Name/Alias:</label>
        <div class="input-wrapper">
          <input type="text" id="name" v-model="artistName" required class="form-input">
          <button type="submit" class="create-button">Create</button>
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
      artistName: '',
    };
  },
  methods: {
    async createArtist() {
    
      try {
          // Define the data to send to the backend
          const data = {
            name: this.artistName,
          };
  
          // Send a POST request to create a new artist
          const response = await axios.post('http://127.0.0.1:8000/api/artists',{
          name: this.artistName
          }); // Adjust the endpoint as per your Laravel API routes
  
          // Assuming the backend returns the created artist, you can handle the response as needed
          const createdArtist = response.data;
  
          // Optionally, you can redirect to the artist list or show a success message
           this.$router.push('/view-artists');
  
          // Clear the input field after successful creation
          this.artistName = '';
  
          // You can also emit an event or take other actions as needed
  
          console.log('New artist created:', createdArtist);
        } catch (error) {
          // Handle errors here
          console.error('Error creating artist:', error);
  
          // You can also display an error message to the user
           this.errorMessage = 'Failed to create artist';
        }
    },
  },
};
</script>



<style scoped>
/* Add your global styles here */

body {
  background-color: black;
  color: black;
  margin: 0;
  padding: 0;
}

.create-artist-heading {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.form-group {
  text-align: center;
}

.form-label {
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-input {
  padding: 10px;
  border: 2px solid gold;
  border-radius: 5px;
  flex-grow: 1;
}

.create-button {
  background-color: gold;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

/* You can add more styles as needed */
</style>
