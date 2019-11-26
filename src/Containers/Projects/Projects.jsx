import { projects } from '../Assets/projects';
import React from 'react';
import { Project } from '../Project/Project';
import './Projects.scss';

export const Projects = () => {
  const projectCard = projects.map((project, i) => {
    return <Project project={project} key={i} />
  })
  return(
      <div className='project__card'> { projectCard } </div>
  )
}