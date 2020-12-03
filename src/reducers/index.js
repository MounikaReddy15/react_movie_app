


import { ADD_MOVIES } from '../actions';

export default function movies(state=[], action) {
    // we shudn't compare string directly
    // comparing to a var is better if we frequently need to change the value
    if(action.type === ADD_MOVIES) {
        return action.movies;
    }
    return state;
}

