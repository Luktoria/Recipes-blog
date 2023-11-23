import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import SearchMeals from './components/SearchMeals.vue';
import CategoriesMeal from './components/CategoriesMeal.vue';



const routes = [
    {
        path: '/', 
        redirect: '/home'
    },

    {
        path: "/home",
        name: "home",
        component: HomePage,

    },

    {
        path: "/search-meals/:name?",
        name: "searchMeals",
        component: SearchMeals,
    },
    {
        path: "/categories",
        name: "categories",
        component: CategoriesMeal
    }



];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;