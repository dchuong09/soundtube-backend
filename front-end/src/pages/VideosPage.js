import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const _ = require('underscore');

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



	render() {
		console.log("hey, you!")
		let musicVideosResult = this.state.videos.filter(video => {
			return video.category === 'music';
		}).map(video => {
			return (
				<div key={video._id} className='videosCard'>
			        <div className="row">
					    <div className="col s12 offset-14">
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

		let tutorialVideosResult = this.state.videos.filter(video => {
			return video.category === 'tutorial'; 
		}).map(video => {
			return (
				<div key={video._id} className='videosCard'>					
			        <div className="row">
					    <div className="col s12 offset-14">
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

		let videosResult = this.state.videos.map(video => {
			return (
				<div key={video._id} className='videosCard'>
			        <div className="row">
					    <div className="col s12 offset-s2">
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
				<div className='row'>
					 <Tabs className='tab'>
					 	<div className='tabBar'>
					        <TabList className='tabList'>
					          <Tab  className='col s4 center-align'>All</Tab>
					          <Tab  className='col s4 center-align'>Music</Tab>
					          <Tab  className='col s4 center-align'>Tutorials</Tab>
					        </TabList>
				        </div>

				        <TabPanel>
				          {_.shuffle(videosResult)}
				        </TabPanel>

				        <TabPanel>
				          {_.shuffle(musicVideosResult)}
				        </TabPanel>

				         <TabPanel>
				          {_.shuffle(tutorialVideosResult)}
				        </TabPanel>

				    </Tabs>
				</div>
			</div>
		);
	}
}

export default VideosPage;