import React, { Component } from 'react';
import './blox.css';
import './elements.css';
class Fullcontainer extends Component {
  render() {

    let styles = {
       backgroundImage: "url('http://www.shopstack.asia:80/wp-content/uploads/2015/12/home_banner-1.png')",
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundColor: 'rgb(253, 224, 88)',
       backgroundPosition: '50% 0.6px'
    };

    return (
       <section className="parallax-sec  dark  blox aligncenter page-title-x full-container" style={styles} data-stellar-background-ratio="0.7">
		   <div className="max-overlay" ></div>
		   <div data-stellar-ratio="1" className="wpb_row vc_row-fluid " >
		      <div className="container">
		         <div className="wpb_column vc_column_container vc_col-sm-12">
		            <div className="vc_column-inner vc_custom_1454326965925">
		               <div className="wpb_wrapper">
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space4" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		                  <hr className="vertical-space5" />
		               </div>
		            </div>
		         </div>
		      </div>
		   </div>
        </section>
    );
  }
}

export default Fullcontainer;