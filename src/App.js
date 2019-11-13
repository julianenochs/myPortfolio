import React from 'react';
import './App.css';
import { Header } from './Containers/Header/Header';
import { About } from './Containers/About/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/about'
             render={ props => <About{...props} /> }>
      </Route>
    </div>
  );
}

export default App;
