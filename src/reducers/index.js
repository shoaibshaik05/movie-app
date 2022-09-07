import { ADD_MOVIES } from "../actions";

export default function movies (state = [], actions){
    if(actions.type===ADD_MOVIES){
        return actions.movies;
    }
    return state;
}

