import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/trendingCss.css';
import {Link} from 'react-router-dom';

class TrendingPage extends Component {
	
	state = {
		videos: [],
	}

	componentDidMount = () => {
		fetch('http://localhost:8080/api/videos')
		  .then(res => res.json())
		  .then(videos => {
		  	this.setState({ videos })
		  })
		  .catch(err => console.log('Trending get data: ', err))
	}


	render() {
		let trendingResults = this.state.videos 
		? this.state.videos.filter(video => {
			return video.votes > 10;
		}).map(video => {
			return (
				<div key={video._id} className='cardVideos'>
			        <div className="row">
					    <div className="col s3 offset-s2">
				        	<iframe title={video.title} type="text/html" width="250" height="140"
					        src={video.videoUrl}
					        frameBorder="0" />
					        <hr />
					    </div>
			        	<div className='videoInfo'>
						    <Link to={`/api/videos/${video._id}`}><p>{video.title} - {video.artist}</p></Link>
				            <p><span className='heart'> &hearts; </span>{video.votes}</p>
			            </div>
					  </div>
					  
				</div>
			);
		})
		: <h2>Loading...</h2>



		return (
			<div className='trendingPage'>
				<Navbar />
				<h1 className="center-align">Trending</h1>
				{trendingResults}
			</div>
			
		);
	}
}

export default TrendingPage;