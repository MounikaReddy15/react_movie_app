

// {
//     type: 'ADD_MOVIES',
//     movie: [m1, m2, m3]
// }

// action types
// as variables
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

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
        type: ADD_FAVOURITE,
        movie
    }
}