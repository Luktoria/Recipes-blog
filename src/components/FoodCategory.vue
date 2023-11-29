<template>
    <div class="container-for-category">

<MealItem
v-for="recipe in recipes"
:key="recipe.id"
:id="recipe.id"
:name="recipe.foodName"
:img="recipe.img"
/>

    </div>
</template>

<script>
import axios from 'axios';
import MealItem from './MealItem.vue';

export default {
    components:{
        MealItem
    },

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
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
   justify-items: center;
    text-align: center; 
}

@media screen and (max-width: 1439px){
    .container-for-category{
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

}


</style>