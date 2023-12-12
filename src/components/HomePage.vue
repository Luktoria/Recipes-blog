<template>

<section class="home-page">

<div class="welcome-message">
<h2>Welcome to Recipes Website!</h2>
<p>Look around and find hundreds of recipes. </p>
<p>No idea what to cook? Try pressing the button, maybe you just find your next favorite meal or drink!</p>
</div>  

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

.welcome-message{
    width: 50%;
    margin: 0 auto;    
    text-align: center;
    padding: 5% 0;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.479);
    border-radius: 50px;
    border: 1px solid white;
}
.container{
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 1.25rem;
   justify-items: center;
    text-align: center;  
}

button{
    background: rgb(247, 148, 0);
    height: 40px;
    width: 250px;
	color: inherit;
	border: none;
    border-radius: 7px;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

button:hover{
    background-color: #011F61;
}

@media screen and (max-width: 1200px){
    .welcome-message h2{
        font-size: 1em;
    }

    .welcome-message p{
        font-size: 0.8em;
    }

}

@media screen and (max-width: 500px){
 
    .welcome-message {
        width: 70%;
        border-radius: 30px;
    }

    .welcome-message h2{
        font-size: 0.8em;
    }

    .welcome-message p{
        font-size: 0.5em;
    }

    button{
        font-size: 0.6em;
        height: 25px;
    width: 150px;
    }
 .container{
     grid-template-columns: repeat(1, minmax(0, 1fr));
 }

}



</style>