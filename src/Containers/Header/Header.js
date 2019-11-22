import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return(
    <header>
      <Link to='/'>
        <h1> Julian Enochs-Brown </h1>
        <h3> Software Developer || Artist </h3>
      </Link>
      <ul className='navigation__links'>
        <Link to='/about'> 
          About 
        </Link>
        <Link to='/apps'> 
          Apps  
        </Link>
        <Link to='/resume'> 
          Resume
        </Link>
      </ul>
    </header>
  )
}