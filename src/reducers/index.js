


import { ADD_MOVIES, ADD_FAVOURITE } from '../actions';

// changing our state from array to object
const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies(state = initialMoviesState, action) {
    // we shudn't compare string directly
    // comparing to a var is better if we frequently need to change the value

    // if(action.type === ADD_MOVIES) {
    //     // return an obj
    //     return {
    //         // spread operator copies the values and also overides if the we 
    //         // pass diff values of already present data
    //         ...state,
    //        list: action.movies
    //     } 
    // }
    // return state;

    // we prefer switch case in react
    switch(action.type) {
     case ADD_MOVIES:
        return {
            ...state,
            list: action.movies
        }  
     case ADD_FAVOURITE:
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
     default:
        return state;
    }
}

