import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import SearchMeals from './components/SearchMeals.vue';
import CategoriesMeal from './components/CategoriesMeal.vue';
import FoodCategory from './components/FoodCategory.vue';
import RecipesDetails from './components/RecipesDetails.vue'; 



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
        component: CategoriesMeal,
    },
    {
        path: "/categories/:category?",
        name: "foodCategory",
        component: FoodCategory
    },

    {
        path: "/recipe/:id",
        name: "recipesDetails",
        component: RecipesDetails
    }
      







];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;