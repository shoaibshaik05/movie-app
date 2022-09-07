import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies (state = initialMoviesState, actions){
    if(actions.type===ADD_MOVIES){
        return {
            ...state,
            list: actions.movies
        };
    }
    return state;
}

