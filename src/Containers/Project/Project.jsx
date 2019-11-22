import React from 'react';
import './Project.scss'
export const Project = ( {project} ) => {
  return(
    <section className='project__section'>
        <h2 className='project__title'>{ project.title }</h2>
        <img src={ project.img } className='project__img' />
        <a href={project.githubRepo} className='links'>
          <img src='/Images/github.png' />
          Github </a>
        <a href={ project.deployedUrl } className='links'> Live Site </a>
    </section>
  )
}