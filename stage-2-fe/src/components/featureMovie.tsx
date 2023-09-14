import React from 'react'
import MovieCard from './movieCard'
import "./featuredmovie.css"

const FeaturedMovie = () => {
    const numberOfMovies = 4;


  return (
    <>
    
    <div className="feature">
        <div className="title">
            <h2>
                Featured Movie
            </h2>
            <div className="more">
                <p>See more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            
        </div>
        <div className="movie-container">
            {[...Array(numberOfMovies)].map((_, index) => (
                <div className="movie-card" key={index}>
                    <MovieCard />
                </div>
            
          ))}
        </div>
    </div>
    
    </>
  )
}

export default FeaturedMovie