import React from 'react';
import { SideBar } from './sideBar';
import Play from "../images/Play.png";
import arrow from "../images/Down-arrow.png"
import Star from "../images/Star.png";
import Tickets from "../images/Two Tickets.png";
import Options from "../images/List.png";
import "./moviepage.css"

export const MoviePage = () => {
  return (
    <>
    
    
        <div className="container">
            {/* <div className="sidebar">
                <SideBar />
            </div> */}
            <div className="trailer-card">
                <div className="watch-trailer">
                    <div className="play">
                        <img src={Play} alt="Press Play" />
                    </div>
                    <p>Watch Trailer</p>
                </div>
            </div>
            <div className="detail-card">
                <div className="movie-details">
                    <div className="movie-title">
                        <p>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</p>
                        <div className="movie-genre">
                            <p>Action</p>
                            <p>Drama</p>
                        </div>
                    </div>
                    <p className='synopsis'>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates
                    on a mission that demands the ultimate sacrifice from those chosen to fly it.
                    </p>
                </div>
                <div className="movie-rating">
                    <div className="activity-icons">
                        <div className="icons">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#222222"></path> </g>
                            </svg>

                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <g clip-path="url(#clip0_15_72)"> <rect width="24" height="24" fill="white"></rect> <circle cx="7" cy="12" r="2" stroke="#000000" stroke-linejoin="round"></circle> <circle cx="17" cy="6" r="2" stroke="#000000" stroke-linejoin="round"></circle> 
                                <path d="M15 7L8.5 11" stroke="#000000"></path> <circle cx="17" cy="18" r="2" stroke="#000000" stroke-linejoin="round"></circle> <path d="M8.5 13.5L15 17" stroke="#000000"></path> </g> <defs> <clipPath id="clip0_15_72"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g>
                            </svg>
                            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                            </svg>
                        </div>
                        
                        <div className="rating">
                            <img src={Star} alt="" />
                            <p>8.5 | 350k</p>
                        </div>
                    </div>                
                    <div className="movie-buttons">
                        <button className='showtimes'>
                            <img src={Tickets} alt="" />
                            <p>See Showtimes</p>
                        </button>
                        <button className='watch-options'>
                            <img src={Options} alt="" />
                            <p>More watch options</p>
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <div className="movie-info">
                        <div className="credits">
                            <p>Director: <span>Joseph Kosinski</span></p>
                            <p>Writers: <span>Jim Cash, John Epps Jr, Peter Craig</span></p>
                            <p>Stars: <span>Tom Cruise, Jenneifer Connelly, Miles Teller </span></p>
                        </div>
                        <div className="top-awards">
                            <div className="top-rated">
                                <p>Top rated movie #65</p>                           
                            </div>
                            <p className='nominations'>Awards 9 nominations</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
        </div>

    </>
  )
}
