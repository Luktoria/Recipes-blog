<template>

<section class="home-page">

<h2>Welcome to Recipes Website!</h2>
<p>Look around and find hundreds of recipes. </p>
<p>No idea what to cook? Try pressing the button, maybe you just find your next favorite meal or drink!</p>

<div class="container">
    <MealItem
    v-for="meal in meals" 
    :key="meal.idMeal"
    :id="meal.idMeal"
    :name="meal.strMeal"
    :img="meal.strMealThumb"
    />
    <button @click="getNewRecipe">Get random recipe</button>
</div>    





   

</section>

</template>

<script>


import axios from 'axios'
import MealItem from './MealItem.vue'

export default {

    components:{
        MealItem
    },

    data(){
        return {
            meals: []
        }
    },  

    methods: {
    getData(){
   
            axios
            .get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => {
                this.meals.push(response.data.meals[0]);
            })
    },

    getNewRecipe(){
        location.reload();
    }
},

mounted(){
    this.getData();
}

}



</script>

<style scoped>
.home-page {
    font-size: 20px;
}

h2,
p{
    text-align: center;
}

.container{
    width: 80%;
    margin: 0 auto;
    display: grid;
    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
    gap: 1.25rem;
    /* padding-left: 2rem;
    padding-right: 2rem; */
   justify-items: center;
    text-align: center;  
}

@media screen and (max-width: 500px){
 
 .container{
     grid-template-columns: repeat(1, minmax(0, 1fr));
 }

}



</style>