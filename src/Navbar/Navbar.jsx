import React from 'react'
import NavStyle from './Style'
import LogosYoutube from '../assets/LogoUtube'
import SearchIcon from '../assets/SearchIcon'
import Microphone from '../assets/Microphone'

function Navbar() {
  return (
    <NavStyle>
      <div className="menu">
       <LogosYoutube />
      </div>
      <div className="search">
        <div className="searchBar">
          <div className="searchInput">
            <label htmlFor="search" className="searchBlock">
            <SearchIcon />
            </label>
            <input type="text" name="search" id="search" placeholder="Search here" />
          </div>
          <button className="searchBtn" >
          <SearchIcon />
          </button>
        </div>
        <div className="microBtn">
        <Microphone />
        </div>
      </div>
      <div className="other">
       
      </div>
    </NavStyle>
  )
}

export default Navbar
