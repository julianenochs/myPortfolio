import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return(
    <section className='footer'>
      <a href='http://www.github.com/julianenochs'>
        <img className='footer__img github' src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/github.png' alt='github icon' />
      </a>
      <a href='http://www.linkedin.com/in/julianenochs'>
        <img className='footer__img' src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/icons8-linkedin-100.png' alt='linked in icon' />
      </a>
      <a href='http://www.twitter.com/julianenochs'>
        <img className='footer__img' src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/icons8-twitter-100.png' alt='twitter icon' />
      </a>
    </section>
  )
}