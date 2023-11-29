<template>
    <div class="searchbar">
        <h2>Search for recipes</h2>
        <input type="text" v-model="searchWord" placeholder="Search for meals" @change="searchRecipe">
    </div>

    <div class="recipe-grid">
        <MealItem v-for="recipe in searchedMeals" :key="recipe" :id="recipe.idMeal" :name="recipe.strMeal"
            :img="recipe.strMealThumb" />
    </div>
</template>

<script>
import axios from 'axios';
import MealItem from './MealItem.vue';

export default {

    components: {
        MealItem
    },

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
.searchbar {
    padding: 0 10%;
    text-align: center;
}

input {
    width: 40%;
    height: 50px;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: auto;
    padding-left: 20px;
}

input:active,
input:focus {
    outline: 3px solid rgb(255, 153, 0);
    border-radius: 5px;

}

.recipe-grid {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    justify-items: center;
    text-align: center;
}

@media screen and (max-width: 1439px) {

    input {
        width: 40%;
        height: 30px;
        font-size: 15px;
    }
}

@media screen and (max-width: 500px) {

    .recipe-grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    input {
        width: 60%;
        height: 25px;
        font-size: 12px;
    }

    input:active,
    input:focus {
        outline: 2px solid rgb(255, 153, 0);
    }

    h2{
        font-size: 16px;
    }

}
</style>