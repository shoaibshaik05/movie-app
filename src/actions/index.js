export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies : movies
    }
}

export function addFovourite(movie){
    return {
        type : ADD_TO_FAVOURITE,
        movie : movie
    }
}

export function removeFromFavourites(movie){
    return {
        type : REMOVE_FROM_FAVOURITE,
        movie : movie
    }
}

export function setShowFavourites(val){
    return {
        type : SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST,
        movie : movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=a8b7ae7c&t=${movie}`;

    return function (dispatch){
        fetch(url).then( (response) => {
            return response.json();
        }).then( (movie) => {
            console.log(movie);
            dispatch(addMovieSearch(movie));
        })
    }
    

}

export function addMovieSearch(movie){
    return {
        type : ADD_SEARCH_RESULT,
        movie : movie
    }
}