<template>
    <nav>
    <div class="navbar-container">
        <h1>Recipes Homepage</h1>
        <ul>
            <router-link :to="{ name: 'home' }"> Home </router-link>
            <router-link :to="{ name: 'searchMeals'}">Search meals</router-link>
            <router-link :to="{ name: 'categories'}">Categories</router-link>
        </ul>
    </div>
</nav>
</template>


<style scoped>
nav{
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    
}

.navbar-container {
    background-color: rgb(247 156 0 / 89%);
    padding: 0 10%;
    color: #011F61;
}
h1{
    display: inline-block;
}

ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    /* width: 40%; */
    height: 50px;
    float: right;
    font-weight: 600; 
}

a{
    display: inline-flex;
    text-align: center;
    list-style: none;
    margin-right: 30px;
    /* width: 25%; */
    height: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    color: #011F61;
    font-size: 18px;
}

a:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.65);
    color: rgb(0, 30, 85);
    width: 130px;
    border-radius: 6px;
    text-decoration: underline;
    text-decoration-color: rgb(247, 149, 2);
}


</style>