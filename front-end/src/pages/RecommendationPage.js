import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/rec.css'

class RecommendationForm extends Component {

	state = {
		storage: '',
		name: '',
		rec: '',
		
	}

	componentDidMount = () => {
		fetch('http://localhost:8080/api/recommendations')
		  .then(res => res.json())
		  .then(storage => this.setState({ storage }))
		  .catch(err => console.log(err))
	}

	handleNameChange = (e) => {
		this.setState({name: e.target.value});
	}

	handleRecChange = (e) => {
		this.setState({rec: e.target.value});
	}

	createRec = (e) => {
		e.preventDefault();
		fetch('http://localhost:8080/api/recommendations', {
			method: 'POST',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	name: this.state.name,
		    recommendations: this.state.rec
		  })
		}).then(res => {
			return res.json();
		}).then(json => {
			this.setState({
				// storage2: json
				storage: [...this.state.storage, json],
				name: '',
				rec: ''
				// storage: this.state.storage.concat([json])

			})
		})
	}

	render() {

		let results = this.state.storage
		? this.state.storage.map(result => {
			return (
				<div key={result._id}>
					<div className="recs center-align">
						<h5>{result.name}</h5>
						<hr /> 
						<h6>{result.recommendations}</h6>
					</div>
				</div>
			);
		})
		: <h2>Loading...</h2>

		return (
			<div className="recContainer"> 
				<Navbar />
				<h1 className='center-align rectitle'>Recommendations</h1>
					<div className="row">
					   <form className="col s12" onSubmit={this.createRec}>
					     <div className="row">
					       <div className="input-field col s6">
					         <i className="material-icons prefix">account_circle</i>

					         <input 
					           id="icon_prefix" 
					           type="text" 
					           className="materialize-textarea"
					           autoFocus={this.props.autoFocus}
					           onChange={this.handleNameChange}
					           value={this.state.name} 
					           placeholder="Name"/>

					       </div>
					       <div className="input-field col s6">
					         <i className="material-icons prefix">mode_edit</i>

					         <input 
					           id="icon_prefix2" 
					           className="materialize-textarea"
					           onChange={this.handleRecChange}
					           value={this.state.rec} 
					           placeholder="Recommendations..."/>

					       </div>
					     </div>
					     <button className="btn-floating btn-small waves-effect waves-light"><i className="material-icons">add</i></button>
					   </form>
					 </div>

					 <div className='center-align'>
						
						{results}

					</div>
			</div>
		);
	}
}

export default RecommendationForm;