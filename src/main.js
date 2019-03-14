import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './blog'
import Contact from './contact'
import Blogdetail from './Blogdetail'
const Main = () => (
   <div id="main" className="site-main">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/blog/:id' component={Blogdetail}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        
    </div> 
  
)

export default Main;