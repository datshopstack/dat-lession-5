import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './main-menu.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {homeActive:true,blogActive:false,contactActive:false}
  }
  toggle(dt) {
  	if(dt == "home"){
  		this.setState({homeActive:true,blogActive:false,contactActive:false});
  	}else if(dt == "blog"){
        this.setState({homeActive:false,blogActive:true,contactActive:false}); 
  	}else{
  		this.setState({homeActive:false,blogActive:false,contactActive:true}); 
  	}
    
  }	
  render() {
  	let homeClass = [];
  	let blogClass = [];
  	let contactClass = [];
  	if(this.state.homeActive){
  		homeClass.push('active');
  	}
  	if(this.state.blogActive){
  		blogClass.push('active');
  	}
  	if(this.state.contactActive){
  		contactClass.push('active');
  	}
    return (
      	 
      <header id="site_header" className="header mobile-menu-hide">
      
		<div className="header-content clearfix">
			    <div className="site-title-block mobile-hidden">
			      <a href="#">
			        <h1 className="site-title">
			          Dat<span> Hoang</span>
			        </h1>
			      </a>
			    </div>
			    {/* Navigation */}
			    <div className="site-nav">
			      {/* Main menu */}
			      <ul id="nav" className="site-main-menu site-auto-menu">
			        <li onClick={this.toggle.bind(this,"home")} className={homeClass.join('')}>
			        <Link to="/">Home</Link>
			          
			        </li>
			        <li onClick={this.toggle.bind(this,"blog")} className={blogClass.join('')}>
			          <Link to="/blog">Blog</Link>
			        </li>
			        <li onClick={this.toggle.bind(this,"contact")} className={contactClass.join('')}>
			        <Link to="/contact">Contact</Link>
			         
			        </li>
			        <li>
			          <a href="#portfolio" className="pt-trigger">
			            Portfolio
			          </a>
			        </li>
			      </ul>
			      {/* /Main menu */}
			    </div>
            {/* Navigation */}
            
        </div>
        
      </header>
     
      
    );
  }
}

export default Header;