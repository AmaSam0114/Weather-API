import React from 'react';
import { Link } from 'react-router-dom';
import search from '../assets/icons/search.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <a className='title'>Weather App</a>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className='search-box'>
<input type='text' placeholder='Search'/>
<img src={search} alt='search' />
      </div>
    </div>
  );
};

export default Navbar;
