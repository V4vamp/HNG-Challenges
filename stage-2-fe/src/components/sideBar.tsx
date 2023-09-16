import React from 'react';
import tvLogo from "../images/tv.png";
import homeLogo from "../images/home.png"
import movieLogo from "../images/movie.png";
import seriesLogo from "../images/show.png";
import upLogo from "../images/calendar.png";
import logoutLogo from "../images/logout.png";
import "./sidebar.css"

export const SideBar = () => {
  return (
    <>
    
    <div className="sidebar">
            <div className="logo-box">
                <div className="logo-img">
                    <img src={tvLogo} alt="tv logo" />
                </div>
                <div className="logo-text">
                    <p>
                        MovieBox
                    </p> 
                </div>
        
            </div>

            <div className="sidebar-icons">
                <div className="home-box">
                    <img src={homeLogo} alt="Home - icon" />
                    <p className='para'>Home</p>
                </div>
                <div className="movie-box">
                    <img src={movieLogo} alt="Movie - icon" />
                    <p className='para'>Movies</p>
                </div>
                <div className="series-box">
                    <img src={seriesLogo} alt="TV - icon" />
                    <p className='para'>TV Series</p>
                </div>
                <div className="up-box">
                    <img src={upLogo} alt="Calendar - icon" />
                    <p className='para'>Upcoming</p>
                </div>
                <div className="play-quiz">
                    <div className="quiz-box">
                        <p className='ticket'>Play movie quizes and earnfree tickets</p>
                        <p className='play'>50k people are playing now</p>
                        <p className='start'>Start playing</p>
                    </div>

                </div>
                <div className="logout-box">
                    <img src={logoutLogo} alt="Logout - icon" />
                    <p className='para'>Log out</p>
                </div>
            </div>
    </div>

    </>
  )
};