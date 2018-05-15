import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/homepage.css';

class HomePage extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className="homePage center-align"> 
					<h1>SOUNDTUBE</h1>
					<Link to='/api/videos' className='waves-effect waves-light btn red darken-4'>Explore</Link>
				</div>
				
			</div>
		);
	}
}

export default HomePage;