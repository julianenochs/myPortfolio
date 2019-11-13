import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return(
    <header>
      <Link to='/home'>
        <h1> Julian Enochs-Brown </h1>
      </Link>
      <ul className='navigation__links'>
        <Link to='/about'> 
          About 
        </Link>
        <Link to='/apps'> 
          Apps  
        </Link>
        <Link to='/meditations'> 
          Meditations
        </Link>
        <Link to='/resume'> 
          Resume
        </Link>
      </ul>
    </header>
  )
}