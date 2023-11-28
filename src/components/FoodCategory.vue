<template>
    <div class="container-for-category">
        <div class="category-item" v-for="recipe in recipes" :key="recipe.id">
            <img :src="recipe.img" alt="image-of-food">
            <h3>{{ recipe.foodName }}</h3>
            <router-link :to="{name: 'recipesDetails', params: { id: recipe.id } }">View</router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            category: this.$route.params.category,
            recipes: []
        }
    },

    created() {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.category)
            .then((response) => {
                const arr = []
                for (let x = 0; x < response.data.meals.length; x++) {
                    arr.push({
                        id: response.data.meals[x].idMeal,
                        foodName: response.data.meals[x].strMeal,
                        img: response.data.meals[x].strMealThumb,
                    });
                    this.recipes = arr;
                }
            });
    }


}

</script>

<style scoped>
.container-for-category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

img {
    width: 100%;
    height: auto;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.category-item {
    border-radius: 15px;
    background-color: white;
    color: black;
    text-align: center;
    margin: 2%;
    padding-bottom: 20px;
    width: 25%;
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