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
import Blogitem from './Blogitem';
import Blogdata from './Blogdata';
class Blog extends Component {
  render() {
    return (
     <div className="pt-wrapper">
        {/* Subpages */}
       <div className="subpages" style={{ paddingTop: 100 }}> 
      <section data-id="blog" data-title="Blog" className="pt-page pt-page-blog pt-page-current pt-page-relative">
  <div className="section-inner custom-page-content">
    <div className="page-header">
      <h2 className="section-title">Blog</h2>
    </div>
    <div className="page-content">
      <div className="blog-masonry two-columns clearfix" style={{position: 'relative', height: 640}}>
        {/* Blog Post 103 */}
        {Blogdata.map((i,key) => <Blogitem key={key} title={i.title} image={i.image} blogid={i.id} linkblog={i.linkblog} left={i.left} top={i.top} />)}
       
        {/* End of Blog Post 103 */}
      </div>
      {/* end .latest-posts */}
     
    </div>
    {/* end .content */}
  </div>
   </section>
   </div></div>


    );
  }
}

export default Blog;