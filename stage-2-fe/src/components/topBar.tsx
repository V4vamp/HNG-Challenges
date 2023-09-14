import React from 'react';
import  "./topBar.css"
import tvLogo from "../images/tv.png"
import searchIcon from "../images/Search.png"


const TopBar = () => {
  return (
    <>

<div className="navbar">
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
    <div className="search-box">
        <input type="text" placeholder='What do you want to watch?' className='search-input' />
        <img src={searchIcon} alt="search icon" className='search-icon' />
    </div>

    <div className="menu-box">
        <div className="menu-text">
            <p>
                Sign in
            </p>
        </div>
        <div className="menu-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white"/>
            </svg>
        </div>
    </div>

</div>

    </>
  )
}

export default TopBar