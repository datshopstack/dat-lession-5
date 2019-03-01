import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Topbar extends Component {
  render() {
    return (
      <section class="top-bar">
          <div class="container">
          <div class="top-links lftflot"><a href="#">Call : (+66) 86-613-2807</a>
          </div><div class="top-links rgtflot"><div class="socialfollow"><a target="_blank" href="https://www.facebook.com/shopstack/" class="facebook"><i class="fa-facebook"></i></a><a target="_blank" href="https://www.linkedin.com/company/shopstack-company/" class="linkedin"><i class="fa-linkedin"></i></a></div></div></div>
      </section>
    );
  }
}

export default Topbar;