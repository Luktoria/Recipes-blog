<template>
    <nav>
        <div class="navbar-container">
            <div class="heading-and-logo">
                <img src="../assets/food-svg.svg" alt="meal-logo">
                <h1>Recipes Website
                </h1>
            </div>
            <ul class="desktop">
                <router-link :to="{ name: 'home' }"> Home </router-link>
                <router-link :to="{ name: 'searchMeals' }">Search meals</router-link>
                <router-link :to="{ name: 'categories' }">Categories</router-link>
            </ul>


        </div>
    </nav>
</template>

<script>
export default {

    data() {
        return {
            menuActive: false,
        }
    }

}

</script>


<style scoped>
nav {
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
}

.navbar-container {
    background-color: rgb(247 156 0 / 89%);
    padding: 0 10%;
    color: #011F61;
}

.heading-and-logo {
    display: inline-flex;
    align-items: center;
}

img {
    height: 30px;
    width: auto;
    margin-right: 15px;
}

h1 {
    display: inline-block;

}

ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 50px;
    float: right;
    font-weight: 600;
}

a {
    display: inline-flex;
    text-align: center;
    list-style: none;
    margin-right: 30px;
    height: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    color: #011F61;
    font-size: 18px;
    width: 130px;
}

a:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.65);
    color: rgb(0, 30, 85);
    width: 130px;
    border-radius: 6px;
    text-decoration: underline;
    text-decoration-color: rgb(247, 149, 2);
}

@media screen and (max-width: 950px) {
    h1 {
        font-size: 18px;
    }

    ul {
        width: 60%;
        font-size: 10px;
    }

    a {
        font-size: 10px;
        width: 80px;
    }

    a:hover {
        width: 80px;
    }
}

@media screen and (max-width: 660px) {

    .navbar-container {
        padding: 0 2%;
    }

    h1 {
        font-size: 14px;
    }

    ul {
        width: 60%;
        font-size: 8px;
        height: 25px;
    }

    a {
        width: 40px;
        font-size: 8px;
    }

    a:hover {
        width: 40px;
    }

}


@media screen and (max-width: 520px) {

    img{
        height: 18px;
        width: auto;
    }

    ul {
        width: 50%;
        font-size: 8px;
        height: 25px;
    }

    a {
        width: 30px;
        font-size: 7px;
    }

    a:hover {
        width: 30px;
    }

}

@media screen and (max-width: 380px) {

img{
    height: 14px;
    width: auto;
}


h1 {
        font-size: 12px;
    }

ul {
    width: 50%;
    font-size: 8px;
    height: 25px;
    padding-left: 10px;
   
}

a {
    width: 25px;
    font-size: 7px;
    margin-right: 0;
}

a:hover {
    width: 25px;
}

}
</style>