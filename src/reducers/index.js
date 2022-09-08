import {combineReducers} from 'redux';
import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
};

export function movies (state = initialMoviesState, actions){
    switch (actions.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list: actions.movies
            }

        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [actions.movie, ...state.favourites]
            }  

        case  REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== actions.movie.Title
            );
            return {
                ...state,
                favourites : filteredArray
            };
         
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: actions.val
            }
        default:
            return state;    
    }
}


const initialSearchState = {
    result: {}
}; 

export function search (state = initialSearchState, actions){
    return state;
};


const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
};

// export default function rootReducer (state = initialRootState, actions){
//     return {
//         movies: movies(state.movies, actions),
//         search: search(state.search, actions)
//     }
// };

export default combineReducers({
    movies,
    search
});