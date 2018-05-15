import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
	return (

		<nav>
		    <div className="nav-wrapper red darken-4">
		      <Link to='/api/videos'  className="brand">SOUNDTUBE</Link>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><Link to='/api/recommendations'>Recommended</Link></li>
		        <li><Link to='/api/videos/trending'>Trending</Link></li>
		      </ul>
		    </div>
		</nav>

	);
}

export default Navbar;