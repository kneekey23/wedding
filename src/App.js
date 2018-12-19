import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish, faDrumstickBite, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faFish)
library.add(faDrumstickBite)
library.add(faCheck)
library.add(faTimes)

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
