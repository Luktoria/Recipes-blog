<template>
    <div class="searchbar">
        <h2>Search for recipes</h2>
        <input type="text" v-model="searchWord" placeholder="Search for meals" @change="searchRecipe">
    </div>

    <div class="recipe-grid">
        <ul v-for="recipe in searchedMeals" :key="recipe">
            <img :src="recipe.strMealThumb" alt="picture of food">
            <h3>{{ recipe.strMeal }}</h3>
            <router-link :to="{name: 'recipesDetails', params: { id: recipe.idMeal } }">View</router-link>
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
    width: 100%;
    gap: 20px;
    padding: 5% 10%;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    
}

img {
    width: 400px;
    height: 250px;
    object-fit: cover;
    text-align: center;
    padding: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

ul{
    width: 400px;
    background-color: white;
    color: black;
    padding: 0 0 15px 0;
    border-radius: 10px;
}

a{
    margin-bottom: 2%;
    text-decoration: none;
    font-size: 18px;
    color: black;
}

a:hover{
    text-decoration: 2px underline;
    text-decoration-color: gold;
}


</style>