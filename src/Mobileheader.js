import React, { Component } from 'react';

class Mobileheader extends Component {
  render() {

    let styles = {
       backgroundImage: "url('http://www.shopstack.asia:80/wp-content/uploads/2015/12/home_banner-1.png')",
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundColor: 'rgb(253, 224, 88)',
       backgroundPosition: '50% 0.6px'
    };

    return (
       <div className="mobile-header mobile-visible">
		  <div className="mobile-logo-container">
		    <div className="mobile-site-title">Alex Smith </div>
		  </div>
		  <a className="menu-toggle mobile-visible">
		    <i className="fa fa-bars" />
		  </a>
       </div>
    );
  }
}

export default Mobileheader;