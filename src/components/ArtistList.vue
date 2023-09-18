<template>
  <div>
    <h2>Artists</h2>
    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <router-link :to="{ name: 'ArtistDetail', params: { id: artist.id } }">
          {{ artist.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArtistList',
  data() {
    return {
      artists: [], // Store the list of artists here
    };
  },
  created() {
    this.fetchArtists();
  },
  methods: {
    async fetchArtists() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/artists');
        this.artists = response.data; // Update the artists array with the fetched data
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    },
  },
};
</script>
