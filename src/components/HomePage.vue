<template>

<section class="home-page">
    <button @click="getData">Click</button>

    <div class="content" >

        {{ meals.mealName }}

    <MealItem
    v-for="meal in meals" 
    :key="meal.idMeal"
    :name="meal.mealName"
    />
    


    </div>

    <div class="container">

        <div class="small-random">
            Another random meal but in small
        </div>

        <div class="small-random">
            Another random meal but in small
        </div>

        <div class="small-random">
            Another random meal but in small
        </div>

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
            meals: [ 
                {
            mealName: "",
            mealImg: "",
            area: ""
        }
    ]
        }
    },  

    methods: {
    getData(){
      
    for (let i = 0; i < 4; i++){ 
            axios
            .get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => {
                this.meals.mealName = response.data.meals[0].strMeal 
            //     this.mealImg = response.data.meals[0].strMealThumb;
            //     this.area = response.data.meals[0].strArea;
               console.log(this.meals.mealName)
            })

       }
    },

},
}


// onMounted(() => {
//     axios
//     .get("https://www.themealdb.com/api/json/v1/1/random.php")
//     .then(({ data }) => {
//         meals.value = data.meals;
//     })
// });



</script>

<style scoped>
.home-page {
    backdrop-filter: blur(5px);
    font-size: 20px;
}
.content{
    width: 100%;
    height: 500px;
    background-color: rgba(12, 12, 12, 0.65);
    border: 1px solid white;
    margin-bottom: 20px;
}

.container{
    display: flex;
    height: 100px;
    background-color: rgba(12, 12, 12, 0.65);
    width: 100%;
    gap: 10px;

}

.small-random{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    border: 1px solid white;
    height: 100px;

}

</style>