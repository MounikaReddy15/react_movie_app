

// {
//     type: 'ADD_MOVIES',
//     movie: [m1, m2, m3]
// }

// action types
// as variables
export const ADD_MOVIES = 'ADD_MOVIES';

// action creators
// for returning actions
export function addMovies(movies) {
    return  {
        type: ADD_MOVIES,
        movies
    }
}