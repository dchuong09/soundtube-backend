import React from 'react';


const Navbar = () => {
	return (

		<nav>
		    <div className="nav-wrapper">
		      <a  className="brand-logo">Logo</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="sass.html">Recommended</a></li>
		        <li><a href="badges.html">Trending</a></li>
		      </ul>
		    </div>
		</nav>

	);
}

export default Navbar;