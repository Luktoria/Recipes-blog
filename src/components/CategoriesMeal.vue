<template>
    <div class="category-grid">

        
            <div class="category-container" v-for="category in categories" :key="category.id">
                <router-link :to="{ name: 'foodCategory', params: { category: category.foodCategory } }">
                <img :src="category.img" alt="food-category-img">
                </router-link>
                <h3>{{ category.foodCategory }}</h3>
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
                    
                },
                {
                    id: "2",
                    foodCategory: "Chicken",
                    img: "https://www.themealdb.com/images/category/chicken.png",
                   
                },
            ]
        }
    },

    methods: {
        fetchData() {
            axios
                .get('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then((response) => {
                    const arr = []
                    for (let i = 0; i < response.data.categories.length; i++) {
                        arr.push({
                            id: response.data.categories[i].idCategory,
                            foodCategory: response.data.categories[i].strCategory,
                            img: response.data.categories[i].strCategoryThumb,
                        });
                        this.categories = arr;
                        // this.categories.foodCategory = response.data.categories[i].strCategory;
                        // console.log(response.data.categories[i].idCategory)
                    }
                })
        },
    },

    created() {
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
.category-grid {

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
}

.category-container {
    margin: 2%;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(12, 12, 12, 0.65);
    width: 25%;
    height: 100%;
}

h3,
p {
    background-color: white;
    color: black;
    margin: 0;
    padding: 3%;

}

p {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 20px;
    height: 30rem;
}
</style>