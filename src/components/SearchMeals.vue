<template>

    <h3>Search by meal name</h3>
   <!-- <div class="input-div">
    <input type="text" placeholder = "Search for meals" v-model="searchword" @change="searchForMeals">
   </div>

   <RecipeBody :recipes ="searchedMeals" /> -->


</template>

<!-- <script setup>
import { ref, computed } from "vue";
import store from '../store';
import RecipeBody from '../components/RecipeBody.vue';

const searchedMeals = computed(() => store.state.searchedMeals);
const searchword = ref('');

function searchForMeals(){
    store.dispatch('searchForMeals', searchword.value);
}

</script>


<style scoped>

.input-div{
    text-align: center;
}

input {
    width: 60%;
    height: 40px;
    padding: 5px;
	background: white;
	border: none;
	border-radius: 5px;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

}

</style> -->