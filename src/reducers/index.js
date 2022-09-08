import {combineReducers} from 'redux';
import { ADD_MOVIES, ADD_SEARCH_RESULT, ADD_TO_FAVOURITE,
     REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES, ADD_MOVIE_TO_LIST 
    } from "../actions";

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
            };

        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [actions.movie, ...state.favourites]
            }; 

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
            };

        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list: [actions.movie, ...state.list]
            };

        default:
            return state;    
    }
}


const initialSearchState = {
    result: {},
    showSearchResults: false
}; 

export function search (state = initialSearchState, actions){
    switch (actions.type) {
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result: actions.movie,
                showSearchResults: true
            }

            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                    showSearchResults: false
                };
                
        default:
            return state;    
    }
};


// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// };

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