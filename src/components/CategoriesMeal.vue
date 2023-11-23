<template>
    <div class="category-grid">
    <div class="category-container" v-for="category in categories" :key="category.id">
        <img :src="category.img" alt="food-category-img">
    <h3>{{ category.foodCategory }}</h3>
    <p> {{ category.desc }}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            categories: [
                {
                    id: "1",
                    foodCategory: "Beef",
                    img: "https://www.themealdb.com/images/category/beef.png",
                    desc: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients."
                },
                {
                    id: "2",
                    foodCategory: "Chicken",
                    img: "https://www.themealdb.com/images/category/chicken.png",
                    desc: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
                },
            ]
        }
    },

    methods:{
        fetchData(){
            axios
            .get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => {
                const arr = []
                for( let i = 0; i < response.data.categories.length; i++){
                    arr.push({
                        id: response.data.categories[i].idCategory,
                        foodCategory: response.data.categories[i].strCategory,
                        img: response.data.categories[i].strCategoryThumb,
                        desc: response.data.categories[i].strCategoryDescription,
                    });
                    this.categories = arr;
                // this.categories.foodCategory = response.data.categories[i].strCategory;
                // console.log(response.data.categories[i].idCategory)
                console.log(this.categories);
            }
            })
        }
    },

    created(){
        this.fetchData();
    }
}

</script>

<!-- for( let i = 0; i < response.data.categories.length; i++){
    this.categories.foodCategory = response.data.categories[i].strCategory;
    console.log(response)
    console.log(this.categories.foodCategory)
} -->

<style scoped>


.category-grid{

display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
}

.category-container{
    margin: 2%;
    border-radius: 10px;
    backdrop-filter: blur(5px); 
    background-color: rgba(12, 12, 12, 0.65);
    width: 25%;
    height: 100%;
}

h3, p{
    background-color: white;
    color: black;
    margin: 0;
    padding: 3%;
  
}

p{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 20px;
    height: 600px;
}

</style>