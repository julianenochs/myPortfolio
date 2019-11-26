import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './Containers/Header/Header';
import { About } from './Containers/About/About';
import { Projects } from './Containers/Projects/Projects';
import { Home } from './Containers/Home/Home';
import { Resume } from './Containers/Resume/Resume';
import { Footer } from './Containers/Footer/Footer';
import { connect } from 'react-redux';
export class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Route exact path='/'
             render={ props => <Home {...props} /> }>
      </Route>
      <Route path='/about'
             render={ props => <About {...props} /> }>
      </Route>
      <Route path='/apps'
             render={ props => <Projects {...props} />}>
      </Route>
      <Route path='/resume'
             render={ props => <Resume {...props} />}>
      </Route>
      <Footer />
    </div>
  )
}
}

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen
})

export default connect(mapStateToProps)(App);
