import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './Blogdetail.css';
class Blogdetailitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      document.body.classList.add('post-template-default');
      document.body.classList.add('single');
      document.body.classList.add('single-post');
      const blogid = "post-"+this.props.id;
      const classname = "post-"+this.props.id+" post type-post status-publish format-standard has-post-thumbnail hentry category-frameworks tag-css3 tag-framework tag-html5 tag-jquery";
      const content = this.props.content;
      const title = this.props.title;
      const img = this.props.img;

      return <div id="main-content"  className="single-page-content content-page-with-sidebar" style={{ paddingTop: 100 }}>
      <div id="primary" className="content-area">
  <div id="content"
    className="page-content site-content single-post"
    role="main">
        <article id={blogid} className={classname}>
  <div className="post-thumbnail">
    <img src={img} className="attachment-full size-full wp-post-image" alt  sizes="(max-width: 1920px) 100vw, 1920px" width={1920} height={900} />     </div>
  <div className="post-content">
    <header className="entry-header">
      <h2 className="entry-title">{title}</h2>
      <div className="entry-meta">
        <span className="byline"><span className="entry-date"><a href="https://lmpixels.com/wp/aveo/bootstrap-is-the-most-popular-html-css-and-js-framework/" rel="bookmark"><i className="fa fa-fw fa-clock-o" /> <time className="entry-date" dateTime="2017-09-19T14:10:21+00:00">September 19, 2017</time></a> </span></span>       
      </div>{/* .entry-meta */}
    </header>{/* .entry-header */}
    <div className="entry-content">
      <div classname="fw-page-builder-content">
        <section classname="fw-main-row">
           <div classname="fw-container">
             {content}
           </div>
        </section>
      </div>
    </div>{/* .entry-content */}
   
  </div>
</article>
  </div>
  </div>
  {/* #primary */}
</div>
      

        
  }

}


export default Blogdetailitem;