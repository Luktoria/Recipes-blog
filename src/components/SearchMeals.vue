<template>
    <div class="searchbar">
        <h2>Search for recipes</h2>
        <input type="text" v-model="searchWord" placeholder="Search for meals" @change="searchRecipe">
    </div>

    <div class="recipe-grid" v-if="searchedMeals">
        <MealItem v-for="recipe in searchedMeals" :key="recipe" :id="recipe.idMeal" :name="recipe.strMeal"
            :img="recipe.strMealThumb" />
    </div>
    <div v-else class="no-result">
            <img src="../assets/rice.png" alt="No food found">
        <h3>No result found.</h3>
            <br>
            <p>Please try searcing for another word.</p>
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
            searchWord:"",
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


    },


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

.no-result{
    margin: 10% auto;
    text-align: center;
    width: 24rem;
    height: 16rem;
    background-color: white;
    color: black;
    padding: 0 0 15px 0;
    border-radius: 10px;
}

.no-result img{
    padding: 20px 0;
}

.no-result h3,
.no-result p{
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 1439px) {

    input {
        width: 40%;
        height: 30px;
        font-size: 15px;
    }
}

@media screen and (max-width: 500px) {

    .no-result{
        width: 16rem;
    height: 12rem;
    }

    .no-result img{
        width: 64px;
        height: auto;
    }

    .no-result h3{
        font-size: 14px;
    }

    .no-result p{
        font-size: 12px;
    }
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