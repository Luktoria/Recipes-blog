<template>
        <ul>
            <img :src="img" alt="picture of recipe">
            <h3>{{ name }}</h3>
            <router-link :to="{name: 'recipesDetails', params: { id: id } }">View</router-link>
        </ul>
</template>

<script>

export default{

    props: ['name', 'img', 'id']

}

</script>

<style scoped>



img {
    width: 24rem;
    height: 10rem;
    object-fit: cover;
    text-align: center;
    padding: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

ul{
    width: 24rem;
    height: 20rem;
    background-color: white;
    color: black;
    padding: 0 0 15px 0;
    border-radius: 10px;
}

a{
    margin-bottom: 2%;
    text-decoration: none;
    font-size: 18px;
    color: black;
}

a:hover{
    text-decoration: 2px underline;
    text-decoration-color: gold;
}

@media screen and (max-width: 1439px){

    img{
        width: 16rem;
        height: 8rem;
    }

    ul{
        width: 16rem;
        height: 15rem;
    }

    h3{
        font-size: 14px;
        margin: 10px;
    }

    a{
        font-size: 12px;
    }

}


@media screen and (max-width: 950px){

    img{
        width: 12rem;
        height: 6rem;
    }

    ul{
        width: 12rem;
        height: 10rem;
    }

    h3{
        font-size: 12px;
        margin: 5px;
    }

    a{
        font-size: 10px;
    }
}

@media screen and (max-width: 720px){
    img{
        width: 9rem;
        height: 4.5rem;
    }

    ul{
        width: 9rem;
        height: 10rem;
    }

    h3{
        font-size: 10px;
        margin: 5px;
    }

}

@media screen and (max-width: 500px){
    img{
        width: 18rem;
        height: 10rem;
    }

    ul{
        width: 18rem;
        height: 14rem;
    }

    h3{
        font-size: 10px;
        margin: 5px;
    }

}


</style>