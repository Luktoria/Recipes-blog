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
*{
  box-sizing: border-box;
}
body{
  background-image: url(./assets/monika-grabkowska-TAj4X5-eRqE-unsplash.jpg);
  background-size: cover;
  color: white;
  margin: 0;
  padding: 0 10%;
}

</style>
