import { projects } from '../Assets/projects';
import React from 'react';
import { Project } from '../Project/Project';
import './Projects.scss';
import { connect } from 'react-redux';
import { openModal } from '../../Actions/index';

export const Projects = (props) => {
  const projectCard = projects.map((project, i) => {
    return <Project project={project} key={i} openModal={props.openModal}/>
  })
  return(
      <div className='project__card'> { projectCard } </div>
  )
}

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal(true))
});

export default connect(null, mapDispatchToProps)(Projects)