import React from 'react';
import './Project.scss'
import Modal from 'react-modal';

export const Project = ( {project} ) => {
  return(
      <section className='project__section' >
        <h2 className='project__title'>{ project.title }</h2>
        <button onClick={ openModal }> View Preview </button>
        <Modal>
          <img src={ project.img } className='project__img' alt='preview of the application' />
        </ Modal>
        <a href={project.githubRepo} className='links'>
        <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/github.png' className='github__icon' alt='github octocat logo' />
          Github </a>
      </section>
  )
} 