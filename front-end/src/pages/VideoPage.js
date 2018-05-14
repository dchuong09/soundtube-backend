import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../App.css'

class VideoPage extends Component {

	state = {
		video: {},
		comments: '',
		name: ''
	}

	componentDidMount = () => {
		let videoId = this.props.match.params.video_id;
		fetch(`http://localhost:8080/api/videos/${videoId}`)
		  .then(res => res.json())
		  .then(video => {
		  	this.setState({ video })
		  })
		  .catch(err => console.log('Video Page render data err ', err))
	}


	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
		
	}

	handleVotes = () => {
		let videoId = this.props.match.params.video_id;
		let updatedVote = this.state.video.votes + 1;
		fetch(`http://localhost:8080/api/videos/${videoId}`, {
			method: 'PUT',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			votes: updatedVote,
		  })
		}).then(res => {
			return res.json();
		}).then(video => {
			
			this.setState({
				video: {
					...video,
					votes: updatedVote
				}
			})
	         
		})
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
			
			this.setState({
				video: {
					...this.state.video, 
					comments: [...this.state.video.comments, json]
				},
				name: '',
				comments: '',
			})
	         
		})
	}



	render() {
		
		let commentsResult = this.state.video.comments
		? this.state.video.comments.map(comment => {
			return (
				<div className='commentContainer'>
					<div key={comment._id} className="comments">
						<p><strong>{comment.name}</strong>: {comment.comments} </p>
					</div>
				</div>
			);
		  })
		: <h2>Loading...</h2>

		return (
			<div>
				<Navbar />
				<iframe title={this.state.video.title} type="text/html" width="100%" height="400"
			    src={this.state.video.videoUrl}
			    frameBorder="0" />
			    <div className='row'>
			    	<div className='videoTitle'>
					    <h4><strong>{this.state.video.artist } -  { this.state.video.title }</strong></h4>
				    	<p onClick={this.handleVotes}><span className='heart customPointer'> &hearts; </span>{this.state.video.votes}</p>
					</div>
				    <hr />
					
			    </div>

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
				           value={this.state.comments} 
				           placeholder="Comment..." />
				       </div>

				     </div>
				     <button className="btn-floating btn-small waves-effect waves-light"><i className="material-icons">add</i></button>
				   </form>
				 </div>

				 {commentsResult}

			</div>
		);
	}
}

export default VideoPage;