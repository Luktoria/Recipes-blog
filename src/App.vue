<template>
  <TheNavbar></TheNavbar>
<router-view></router-view>
</template>

<script>

import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {
    TheNavbar
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Karla:ital,wght@0,400;1,600&display=swap");

*{
  box-sizing: border-box;
}
body{
  background-image: url(./assets/monika-grabkowska-TAj4X5-eRqE-unsplash-medium.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  margin: 0;
  /* backdrop-filter: blur(2px); */
  font-family: 'Karla', sans-serif;;
  /* padding: 0 10%; */
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-family: 'Abril Fatface', serif;
  letter-spacing: 2px;
}

</style>
