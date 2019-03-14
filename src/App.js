import React, { Component } from 'react';
import logo from './logo.svg';
import './scaffolding.css';
import './App.css';
import './Custom.css';
import Topbar from './Topbar';
import Header from './Header';
import Mobileheader from './Mobileheader';
import Footer from './Footer';
import Main from './main';
class App extends Component {
  render() {
    return (
      <div id="page" className="page-layout" >
        <Header />
        <Mobileheader />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
