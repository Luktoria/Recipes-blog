<template>
    <div class="searchbar">
        <h2>Search for recipes</h2>
        <input type="text" v-model="searchWord" placeholder="Search for meals" @change="searchRecipe">
    </div>

    <div class="recipe-grid">
        <ul v-for="recipe in searchedMeals" :key="recipe">
            <h2>{{ recipe.strMeal }}</h2>
            <img :src="recipe.strMealThumb" alt="picture of food">
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            searchWord: "",
            searchedMeals: []
        }
    },

    methods: {
        searchRecipe() {
            if (this.searchWord) {
                axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchWord}`)
                    .then(data => {
                        this.searchedMeals = data.data.meals;
                    })
            }
            else {
                this.searchedMeals = [];
            }
        },

      
    }


}


</script>

<style scoped>
.searchbar{
    padding: 0 10%; 
}

input{
    width: 40%;
    height: 50px;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 5px;


}

input:active,
input:focus{
    outline: 3px solid rgb(255, 153, 0);
    border-radius: 5px;
    
}

.recipe-grid {
    display: inline-grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
}

img {
    width: 200px;
    height: auto;
}
</style>