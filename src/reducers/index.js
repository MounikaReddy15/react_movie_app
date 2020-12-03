


import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';

// changing our state from array to object
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMoviesState, action) {
    console.log('movie reducer');
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
     case ADD_TO_FAVOURITES:
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
     case REMOVE_FROM_FAVOURITES:
        const filteredArray =  state.favourites.filter(movie => movie.Title !== action.movie.Title);
        return {
            ...state,
            favourites: filteredArray
           
        }
     case SET_SHOW_FAVOURITES:
        return {
            ...state,
            showFavourites : action.val   
               
        }
     default:
        return state;
    }
}

// the api which we will use to search will return a single obj as result
const initialSearchState = {
    result: {}
};

export function search (state = initialSearchState, action) {
    console.log('search reducer');
    return state;

}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

export default function rootReducer (state = initialRootState, action) {
    return  {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}