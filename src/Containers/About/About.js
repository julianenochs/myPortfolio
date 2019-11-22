import React from 'react';
import './About.scss';

export const About = () => {
  return(
    <section className='about-me__section'>
      <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/SplashImages/julianprayerhands.jpeg' alt='headshot of Julian' className='headshot'/>
      <p className='about-me__text'>
        I'm a software developer with a curious mind that is inspired by beautiful and accessible design. <br/> As a yoga and meditation instructor, I learned to see beauty in the efficient processes of the body and mind.
        Those processes transcend the wellness industry and have influenced the way I view the field of technology. Simplicity is key in my work. I believe that through simple techniques we can vastly impact the world around us to become a more comfortable,
        accessible place for all people. <br /> My hope is to perpetuate a positive influence through my work, in the workplace and through working with companies with strong missions. 
        <br />
        <strong>Let's make the world more beautiful together.</strong>
        <a className='button' href='mailto:julian.n.enochs@gmail.com?subject=Lets work together'> 
          <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Icons/icons8-email-100.png' alt='at symbol' className='icon' /> Contact me </a>
        <a className='alumni-portfolio button' href='https://alumni.turing.io/alumni/julian-enochs-brown'> 
          <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Icons/icons8-call-me-50.png' alt='hang ten' className='icon' /> Check out my alumni portfolio </a>
      </p>
    </section>
  )
}