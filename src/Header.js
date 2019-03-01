import React, { Component } from 'react';
import './main-menu.css';
class Header extends Component {
  render() {
    return (
      <header id="header" className="horizontal-w  sm-rgt-mn  w-header-type-10">
			<div className="container">
			<div className="col-md-3 col-sm-3 logo-wrap">
				<div className="logo">
					<a href="http://www.shopstack.asia:80/">
					<img src="http://www.shopstack.asia:80/wp-content/uploads/2019/01/shopstack-logo-email.png" width="210" id="img-logo-w1" alt="Shopstack Asia" className="img-logo-w1"  />
					</a>
					<a href="http://www.shopstack.asia:80/">
					<img src="http://www.shopstack.asia:80/wp-content/uploads/2019/01/shopstack-logo-email.png" width="280" id="img-logo-w2" alt="Shopstack Asia" className="img-logo-w2"  />
					</a>
					<span className="logo-sticky">
					  <a href="http://www.shopstack.asia:80/">
					 <img src="http://www.shopstack.asia:80/wp-content/uploads/2019/01/shopstack-logo-email.png" width="60" id="img-logo-w3" alt="Shopstack Asia" className="img-logo-w3" />
					 </a>
					 </span>
				 </div>
			 </div>
			<nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9"><div id="menu-icon"><i className="fa-navicon"></i> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1"></span><span className="mn-ext2"></span><span className="mn-ext3"></span></div><div id="menu-icon"><i className="fa-navicon"></i> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1"></span><span className="mn-ext2"></span><span className="mn-ext3"></span></div>
				<div className="container">
							<div id="search-form">
					<a href="javascript:void(0)" className="search-form-icon"><i id="searchbox-icon" className="fa-search"></i></a>
				<div id="search-form-box" className="search-form-box">
						<form action="http://www.shopstack.asia:80/" method="get">
							<input type="text" className="search-text-box" id="search-box" name="s" />
						</form>
						</div>
					</div>
					<ul id="nav"><li id="menu-item-9557" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9557"><a href="http://www.shopstack.asia" data-description="start here">Home</a></li>
			<li id="menu-item-9597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9597"><a href="http://www.shopstack.asia:80/index.php/about-us/" data-description="About Us">Company</a></li>
			<li id="menu-item-9596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9596"><a href="http://www.shopstack.asia:80/index.php/portfolio-shopstack/" data-description="">Portfolio</a></li>
			<li id="menu-item-9592" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9592"><a href="http://www.shopstack.asia:80/index.php/contact-us/" data-description="connect now">Contact</a></li>
			</ul>	</div>
			</nav>
			</div>
      </header>
    );
  }
}

export default Header;