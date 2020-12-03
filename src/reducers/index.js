


import { ADD_MOVIES } from '../actions';

// changing our state from array to object
const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies(state = initialMoviesState, action) {
    // we shudn't compare string directly
    // comparing to a var is better if we frequently need to change the value
    if(action.type === ADD_MOVIES) {
        // return an obj
        return {
            // spread operator copies the values and also overides if the we 
            // pass diff values of already present data
            ...state,
           list: action.movies
        } 
    }
    return state;
}

