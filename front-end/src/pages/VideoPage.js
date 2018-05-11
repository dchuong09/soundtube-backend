import React, {Component} from 'react';

class VideoPage extends Component {

	state = {
		videos: {},
		comments: '',
		name: ''
	}

	componentDidMount = () => {
		let videoId = this.props.match.params.video_id;
		fetch(`http://localhost:8080/api/videos/${videoId}`)
		  .then(res => res.json())
		  .then(videos => {
		  	this.setState({ videos })
		  })
		  .catch(err => console.log('Video Page render data err ', err))
	}


	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
		
	}

	handleCommentChange = (e) => {
		this.setState({ comments: e.target.value });
		
	}

	createComment = (e) => {
		e.preventDefault();
  		let videoId = this.props.match.params.video_id;
		fetch(`http://localhost:8080/api/videos/${videoId}/comments`, {
			method: 'POST',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	name: this.state.name,
		    comments: this.state.comments,
		    votes: 0
		  })
		}).then(res => {
			return res.json();
		}).then(json => {
			// this.setState({
			// 	videos: {
			// 		comments: this.state.videos.comments.concat(json)
			// 	},
			// 	name: '',
			// 	comments: ''
			// })
			
			this.setState({
				videos: {
					title: this.state.videos.title, 
					category: this.state.videos.category,
					artist: this.state.videos.artist, 
					votes: this.state.videos.votes,
					videoUrl: this.state.videos.videoUrl, 
					videoDesc: this.state.videos.videoDesc, 
					videoThumbnail: this.state.videos.videoThumbnail,
					comments: this.state.videos.comments.concat(json)
				},
				comments: ''
			})
	         
		})
	}



	render() {
		
		let commentsResult = this.state.videos.comments
		? this.state.videos.comments.map(comment => {
			return (
				<div key={comment._id}>
					<p>Name:{comment.name}</p>
					<p>Comments: {comment.comments}</p>
				</div>
			);
		  })
		: <h2>Loading...</h2>




		return (
			<div>
				<iframe title={this.state.videos.title} type="text/html" width="100%" height="400"
			    src={this.state.videos.videoUrl}
			    frameBorder="0" />
			    <h4><strong>Title: {this.state.videos.title}</strong></h4>
			    <h4><strong>Artist: {this.state.videos.artist}</strong></h4>
			    <hr/>
			    <h4>Comments...</h4>
			    {commentsResult}

			    <div className="row">
				   <form className="col s12" onSubmit={this.createComment}>
				     <div className="row">
				       <div className="input-field col s6">
				         <i className="material-icons prefix">account_circle</i>


				         <input 
				           id="icon_prefix" 
				           type="text" 
				           className="validate"
				           autoFocus={this.props.autoFocus}
				           onChange={this.handleNameChange}
				           value={this.state.name} 
				           placeholder="Name" />

				       </div>
				       <div className="input-field col s6">
				         <i className="material-icons prefix">mode_edit</i>


				         <input 
				           id="icon_prefix2" 
				           className="materialize-textarea"
				           onChange={this.handleCommentChange}
				           value={this.state.comment} 
				           placeholder="Comment..." />

				       </div>
				     </div>
				     <button className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
				   </form>
				 </div>



			</div>
		);
	}
}

export default VideoPage;