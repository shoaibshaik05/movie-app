import React from 'react';
import { addFovourite } from '../actions';


class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(addFovourite(movie))
    }

    handleUnFavouriteClick = () => {

    }

    render() {
        const {movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt='movie-poster' src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>Unfavourites</button>
                            : 
                            <button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourites</button>
                        }
                    </div>
                </div>
            </div>
            
        );
    }
}

export default MovieCard;