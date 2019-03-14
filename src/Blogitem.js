import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Blogitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const blogid = "item post-"+this.props.blogid;
      const link = '/blog/'+this.props.blogid;
      const left = this.props.left;
      const top =  this.props.top;
      const image = this.props.image;
      const title = this.props.title;

      return <div className={blogid} style={{position: 'absolute', left: left, top: top}}>
          <div className="blog-card">
            <div className="media-block">
              <Link to={link}>
                 <span className="sticky-badge">Featured</span>
                <img src={image} className="attachment-blog-masonry-image-two-c size-blog-masonry-image-two-c wp-post-image" alt="Bootstrap is the Most Popular Framework" sizes="(max-width: 768px) 92vw, (max-width: 992px) 450px, (max-width: 1200px) 597px, 40vw" width={1920} height={900} />                                                                                  <div className="mask" />
                <div className="post-date" title={2017}><span className="day">19</span><span className="month">Sep</span></div>
              </Link>
            </div>
            <div className="post-info">
              <a href={link}><h4 className="blog-item-title">{title}</h4></a>
            </div>
          </div>
        </div>
        
  }

}


export default Blogitem;