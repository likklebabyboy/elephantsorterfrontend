<template>
  <div>
    <h2>{{ artist.name }}</h2>

    <!-- Display multimedia files associated with the artist -->
    <div v-if="artist.multimediaFiles.length > 0">
      <h3>Multimedia Files</h3>
      <ul>
        <li v-for="file in artist.multimediaFiles" :key="file.id">
          {{ file.file_name }} ({{ file.file_type }})
        </li>
      </ul>
    </div>

    <!-- Add Dropzone for file upload -->
    <dropzone
      id="file-dropzone"
      :options="dropzoneOptions"
      @vdropzone-success="handleFileUpload"
    ></dropzone>
  </div>
</template>

<script>
import Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import axios from 'axios';

export default {
  components: {
    Dropzone,
  },
  data() {
    return {
      artist: {
        name: '', // Initialize with default values
        multimediaFiles: [],
      },
    };
  },
  computed: {
    dropzoneOptions() {
      return {
        url: `http://127.0.0.1:8000/api/artists/${this.$route.params.id}/upload`,
      };
    },
  },
  created() {
    // Fetch artist data when the component is created
    this.fetchArtistData();
  },
  methods: {
    async fetchArtistData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/artists/${this.$route.params.id}`);
        this.artist = response.data; // Update the artist data
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    },
    // Add your handleFileUpload method if needed
  },
};
</script>
