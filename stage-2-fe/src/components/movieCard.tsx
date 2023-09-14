import React from 'react';
import imdb from "../images/imdb.png";
import rotten from "../images/rotten.png";
import './moviecard.css';

const MovieCard = () => {
  return (
    <>

    <div className="card">
        <div className="poster">
            <div className="action">
                <div>
                    <p className='type'>TV SERIES</p>
                </div>
                <div className="fav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="movie-details">
            <div className="details">
                <h2 className='year'>USA, 2016 - Current</h2>
                <h2 className='movie-name'>Stranger Things</h2>
            </div>
            
            <div className="rating">
                <div className="imdb">
                    <img src={imdb} alt="imdb-logo" />
                    <p>86.0/100</p>
                </div>
                <div className="rotten">
                    <img src={rotten} alt="rotten tomatoes" />
                    <p>97%</p>
                </div>
            </div>
            <div className="genre">
                <p>Action, Addventure, Hoorror</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default MovieCard