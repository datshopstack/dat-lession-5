import React, { Component } from 'react';
import logo from './logo.svg';
import './base.css';
import './scaffolding.css';
import './App.css';
import Topbar from './Topbar';
import Header from './Header';
import Fullcontainer from './fullcontainer';
class App extends Component {
  render() {
    return (
      <div id="wrap" class="colorskin-2  dark-submenu" >
        <Topbar />
        <Header />
        <Fullcontainer />
      </div>
    );
  }
}

export default App;
