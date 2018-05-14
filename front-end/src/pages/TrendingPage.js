import React, {Component} from 'react';
import Navbar from '../components/Navbar';


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
			return video.votes > 3;
		}).map(video => {
			return (
				<div key={video._id} className='videosCardss'>
					

			        <div className="row">
					      	
					    <div className="col s12">

					    	<div className="cardss">
						        <div className="card-imagess">
						          <iframe title={video.title} type="text/html" width="200" height="100"
							      src={video.videoUrl}
							      frameBorder="0" />
						       	  	
						        </div>
						        
							        <div className="card-contentss ">
							        	<div className='cardIfoss'>
										  <p>{video.title}</p>
								          <p>{video.artist}</p>
								          <p>{video.votes}</p>
							            </div>
							        </div>
					        
					
					      </div>
					    </div>
					  </div>
    				

				</div>
			);
		})
		: <h2>Loading...</h2>



		return (
			<div>
				<Navbar />
				<h1 className="center-align">Trending</h1>
				{trendingResults}
			</div>
			
		);
	}
}

export default TrendingPage;