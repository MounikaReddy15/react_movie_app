

// {
//     type: 'ADD_MOVIES',
//     movie: [m1, m2, m3]
// }

// action types
// as variables
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creators
// for returning actions
export function addMovies(movies) {
    return  {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {
    return  {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFavourite (movie) {
    return  {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites (val) {
    return  {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie) {
    // func returns obj
    return  {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT, 
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?apikey=7f5917fd&t=${movie}`;
    // func returning function
    return function (dispatch) {
    fetch(url)
    .then(response => response.json())
    .then(movie => {
        console.log(movie, 'movie')

        // dispatch an action
        dispatch(addMovieSearchResult(movie));
    })
}
}



// tell redux if we get action pass action to the reducer
// if we get function call the particular func with dispatch as the arg
// we can use middleware for the above 
// thunk a func which returns func