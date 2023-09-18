<template>
    <div class="Home">
      
      <h1>Welcome to Elephant Sorter</h1>
      <hr>
      <br>
    <br>
      <h2>An interactive way to store and sort artist  data</h2>
      <br>
      <div class="action-buttons">
        <router-link to="/view-artists">
          <button class="view-button">View Artists</button>
        </router-link>
        <router-link to="/create-artist">
          <button class="create-button">Create Artist</button>
          
        </router-link>
      </div>
    </div>
  </template>
  <script>
export default{
  name:'Home',
  
}

</script>
  <style scoped>
  .home {
    text-align: center;
    margin-top: 100px;
    margin: 10%;
    border-style: dashed;
    border-color: #050b0f;
  }
  
  h1 {
    font-size: 24px;
    color: brown;
  }
  
  .action-buttons {
    margin-top: 20px;
  }
  
  .view-button,
  .create-button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
    border-radius: 30%;
  }
  
  .view-button {
    background-color: #000000;
    color: #fff;
    border: beige;
  }
  
  .create-button {
    background-color: #FFFDD0;
    color: #000000;
    border: burlywood;

  }
  
  /* :set background-color: #FFFDD0; */
  </style>
  