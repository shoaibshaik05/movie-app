import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies (state = initialMoviesState, actions){
    switch (actions.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list: actions.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [actions.movie, ...state.favourites]
            }    
        default:
            return state;    
    }
}

