import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div className="homePage center-align"> 
				<h1>SOUNDTUBE</h1>
				<Link to='/api/videos' className='waves-effect waves-light btn'>Explores</Link>
			</div>
		);
	}
}

export default HomePage;