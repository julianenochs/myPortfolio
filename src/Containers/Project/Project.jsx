import React, { Component } from 'react';
import './Project.scss'
import ReactModal from 'react-modal';

export class Project extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false
    }
  }

  showModal = () => {
    this.setState({ isModalVisible: true })
  }

  closeModal = () => {
    this.setState({ isModalVisible: false })
  }

  render() {
    const {project } = this.props;
    return (
      <section className='project__section' >
        <h2 className='project__title'>{project.title}</h2>
        <img src={project.img} className='project__img' alt='thumbnail of project' />
        <p className='project__text'>{project.description}</p>
        <ReactModal className='modal'
          isOpen={this.state.isModalVisible}
          shouldFocusAfterRender={false}
          >
          <img src={project.preview} className='project__preview' alt='preview of the application' />
          <button onClick={ this.closeModal } className='apps__button closing__button'> Exit </button>
        </ ReactModal>
        {project.preview ? <button onClick={this.showModal} className='apps__button'> View Preview </button> : ''}
        <a href={project.githubRepo} className='links project__links'>
          <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/github.png' className='icon' alt='github octocat logo' />
          Github </a>
        <hr/>
      </section>
    )
  }
}