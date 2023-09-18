<template>
  <div>
    <!-- Remove unnecessary href attributes -->
    <a href="/ArtistList.vue" target="_blank"></a>
    <a href="/CreateArtist.vue" target="_blank"></a>
    <a href="/Home.vue" target="_blank"></a>
    <a href="/ArtistDetail.vue" target="_blank"></a>

    <!-- Replace the button's click event with navigateToHome method -->

    <router-link to="/"><button>Home</button></router-link>
    
  </div>

  <RouterView></RouterView>

</template>

<script>
// import Home from '@/views/Home.vue';

export default {

    
    }

</script>
