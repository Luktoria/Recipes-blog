<template>
    <div class="details-container">
        <div class="background-blur">
        <div class="recipe-name">  
        <h2>{{ meal.strMeal }}</h2>
        </div>
            <img :src="meal.strMealThumb" alt="Picture about food">
     

        <div class="background-div">

            <div class="instructions">
                <h3>Instructions</h3>
                <p>
                    {{ meal.strInstructions }}
                </p>
            </div>

          

            <div class="grid-for-ingredients">
                <div class="ingredients">
                    <h4>Ingredients</h4>
                    <ul>
                        <template v-for="(_, ind) of new Array(20)" :key="ind">
                            <li v-if="meal[`strIngredient${ind + 1}`]">
                                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <div>
                    <h4>Measures</h4>
                    <ul>
                        <template v-for="(_, ind) of new Array(20)" :key="ind">
                            <li v-if="meal[`strMeasure${ind + 1}`]">
                                {{ meal[`strMeasure${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                

            </div>


            <button><a :href="meal.strYoutube">YOUTUBE</a></button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import { onMounted } from "vue";

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}

        })
})

</script>

<style scoped>
.details-container {
    text-align: center;
    width: 100%;
    padding: 0 30%;
    margin: auto;
}

.background-blur{
    background-color: white;
    color: black;
}


ul {
    display: inline-block;
    list-style: none;
    padding-left: 0;
}

img {
    width: 100%;
    height: auto;
    margin: auto;
}

button {
    display: block;
    background-color: rgb(247, 148, 0);
    width: 150px;
    height: 50px;
    margin: auto;
    margin-top: 50px;
	color: inherit;
	border: none;
    border-radius: 5px;
    font-weight: bold;
}

button:hover{
    background-color: #011F61;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: white;
}

h2,
h3,
h4 {
    font-weight: 700;
}

h2 {
    font-size: 56px;
    padding: 24px 0 24px 10px;
    margin: 0;
}

h3{
    font-size: 30px;
}

h4 {
    text-align: left;
    font-size: 20px;
}



.recipe-name{
    width: 100%;
    text-align: center;
    padding: 15px auto;
    background-color: white;
    color: black;
}
.background-div {
    padding: 5%;
}

.instructions {
    text-align: left;
    font-size: 18px;
    line-height: 30px;
}



.grid-for-ingredients {
    position: relative;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    line-height: 25px;
    text-align: left;
    width: 80%;
    border: 1px solid black;
}
.ingredients {
    padding-left: 10px;
}

@media screen and (max-width: 1439px){
    .details-container{
        padding: 0 18%;
    }
}

@media screen and (max-width: 500px){ 

    .details-container{
        padding: 0 10%;
    }

    h2{
        font-size: 18px;
    }

    h3{
        font-size: 16px;
    }

    h4{
        font-size: 14px;
    }

    .instructions{
        line-height: 20px;
    }

    p{
        font-size: 12px;
        letter-spacing: 0.5px;
    }

    .grid-for-ingredients {
    width: 100%;
}

    ul{
        font-size: 12px;
    }
}
</style>



