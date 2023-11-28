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
            console.log(data);
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
    background-color: rgba(12, 12, 12, 0.92);
    backdrop-filter: blur(10px);
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
    background-color: red;
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
    background-color: rgba(255, 0, 0, 0.473);
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
    background-color: #0000006e;
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
    border: 1px solid white;

}


.ingredients {
    padding-left: 10px;
}
</style>





<!-- <template>
    Details for recipes
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return {
            id: this.$route.params.id,
            recipe: {
                mealId: "",

            }
        }
    },

    created(){
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.id)
        .then((response) => {
            console.log(response)
            console.log(response.data.meals[0].idMeal);
            console.log(response.data.meals[0].strIngredient1);
            console.log(response.data.meals[0].strInstructions);
        })
    }

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

</script> -->