import React, { Component } from 'react';
import './Project.scss'
// import Modal from 'react-modal';
import { openModal } from '../../Actions/index';
import { connect } from 'react-redux'; 
export class Project extends Component {
  constructor(props) {
    super(props);
  }
  // showModal = () => {
  //   console.log(this.props.openModal(true))
  //   this.props.openModal()
  // }

  render() {
    const {project } = this.props;
    return (
      <section className='project__section' >
        <h2 className='project__title'>{project.title}</h2>
        <div onClick={ this.props.isModalOpen }> View Preview </div>
        {/* <Modal> */}
          <img src={project.img} className='project__img' alt='preview of the application' />
        {/* </ Modal> */}
        <a href={project.githubRepo} className='links'>
          <img src='https://julianenochsportfolio.s3-us-west-1.amazonaws.com/Images/github.png' className='github__icon' alt='github octocat logo' />
          Github </a>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isModalVisible: state.isModalVisible
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
