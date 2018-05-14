import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';


class VideosPage extends Component {

	state = {
		videos: [],

	}

	componentDidMount = () => {
		fetch('http://localhost:8080/api/videos')
		  .then(res => res.json())
		  .then(videos => {
		  	this.setState({ videos })
		  })
		  .catch(err => console.log('VideosPage get data: ', err))
	};

	// <iframe title={video.title} type="text/html" width="180" height="100"
	// 						      src={video.videoUrl}
	// 						      frameBorder="0" />
	render() {
		let videosResult = this.state.videos.map(video => {
			return (
				<div key={video._id} className='videosCard'>
					

			        <div className="row">
					      	
					    <div className="col s12 offset-l4">

					    	<div className="card">
						        <div className="card-image">
						          <iframe title={video.title} type="text/html" width="200" height="100"
							      src={video.videoUrl}
							      frameBorder="0" />
						       	  	
						        </div>
						        
							        <div className="card-content ">
							        	<div className='cardIfo'>
										  <Link to={`/api/videos/${video._id}`}>{video.title}</Link>
								          <p>{video.artist}</p>
							            </div>
							        </div>
					        
					
					      </div>
					    </div>
					  </div>
    				

				</div>
			);
		})	
	
		return (
			<div>
				<Navbar />
				<div className="row">
					<div className="tab">
					  <button className="tablinks col s4" onclick="openCity(event, 'London')">ALL</button>					  
					  <button className="tablinks col s4" onclick="openCity(event, 'Paris')">MUSIC</button>
					  <button className="tablinks col s4" onclick="openCity(event, 'Tokyo')">TUTORIAL</button>
					</div>
				</div>
				{videosResult}
			</div>
		);
	}
}

export default VideosPage;