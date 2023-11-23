import axios from 'axios';

export function searchForMeals({ commit }, searchword){
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchword}`)
    .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}