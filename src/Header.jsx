import React from 'react'
import './Header.css'

const Header = ({ search, setSearch }) => {
  return (
    <div className='container'>
        <div className="icon"><img src="https://cdn2.vectorstock.com/i/1000x1000/95/96/fitness-center-sport-logo-on-a-dark-background-vector-19859596.jpg" alt="logo" /></div>
        <div className="search-box">
            <input type="text" placeholder='Search a video...' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="profile-icon">
            <img src="https://i.pinimg.com/originals/14/62/b8/1462b8bf163ab574e75157bff159a357.png" alt="Profile Image"/>
        </div>
    </div>
  )
}

export default Header