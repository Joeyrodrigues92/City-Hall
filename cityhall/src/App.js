import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (
        <div>
          <Header />
          <div style={{ 
          height:'100%', 
          paddingLeft: '50px', 
          paddingRight: '50px'
          }}>
            <Main />
          </div>
          
        </div>
    );
  }
}

export default App;



 