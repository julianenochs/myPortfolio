import React from 'react';
import './About.scss';

export const About = () => {
  return(
    <section className='about-me__section'>
      <p className='about-me__text'>
        I'm a software developer with a curious mind that is inspired by beautiful and accessible design. <br/> As a yoga and meditation instructor, I learned to see beauty in the efficient processes of the body and mind.
        Those processes transcend wellness and has influenced the way I view the field of technology. Simplicity is key in my work. I believe that through simple techniques we can vastly impact the world around us to become a more comfortable,
        accessible place for all people. <br /> My hope is to perpetuate a positive influence through my work, in the workplace and through working with companies with strong missions. 
        <br />
        <strong>Let's make the world more beautiful together.</strong>
        <a className='contact' href='mailto:julian.n.enochs@gmail.com?subject=Lets work together'>Contact me </a>
      </p>
    </section>
  )
}