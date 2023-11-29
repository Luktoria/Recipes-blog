<template>
    <div class="category">

        
            <div class="category-container" v-for="category in categories" :key="category.id">
                <router-link :to="{ name: 'foodCategory', params: { category: category.foodCategory } }">
                    <h3>{{ category.foodCategory }}</h3>
                    <img src="../assets/link-svg.svg" alt="follow-link-logo">
                </router-link>
                
            </div>
        

    </div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            categories: []
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
                        });
                        this.categories = arr;

                    }
                })
        },
    },

    created() {
        this.fetchData();
    }
}

</script>



<style scoped>
.category {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    justify-content: center;

}

.category-container {
    margin: 2%;
    border-radius: 10px;
    background-color: white;
    width: 30%;
}

a {
    display: inline-block;
    color: black;
    text-decoration: underline;
    text-decoration-color: black;
    width: 100%;
    margin: 0;
    padding: 3%;
}

h3{
    display: inline-block;
    margin-right: 15px;
}




@media screen and (max-width: 800px){
 
    .category{
     flex-direction: column;
     width: 100%;
     text-align: center;
     align-content: center;
 
    }

 .category-container{
    width: 60%;
 }

}
</style>