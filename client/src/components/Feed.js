import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import BSort from '../resources/BSort';

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [],
			isLoading: false
		};
		this.getHistory = this.getHistory.bind(this);
	}

	getHistory() {
		axios.get(
			this.props.api+'history.json?newerthan='+this.state.history[0]._id,
			{ crossdomain: true }
		).then(res => {
			if (res.data.err) console.log(res.data.err);
			if (res.data.data
				&& Array.isArray(res.data.data)
				&& res.data.data.length > 0) {
					this.setState(state => {
						return {
							history: [...res.data.data, ...state.history]
						};
					});
				}
		});
	}

	componentDidMount() {
		this.setState({ isLoading: true }, () => {
			axios.get(
				this.props.api+'commenttree.json',
				{ crossdomain: true }
			).then(res => {
				if (res.data.err) console.log(res.data.err);
				this.setState({ 
					history: BSort(res.data.data, 'id'),
					isLoading: false
				});
				setInterval(this.getHistory(), 5000);
			}).catch(err => {
				this.setState({ isLoading: false });
				console.log(err);
			});
		});
	}

	render() {
		let comments = this.state.history
			.filter(comment => comment.parentID > 't3_000000')
			.map(comment => {
				return (
					<div style={{ marginTop: '5px'}} key={comment.id}>
						<Comment
							id={comment._id}
							key={comment.id}
							author={comment.author}
							body={comment.body}
							permalink={comment.permalink}
							created={comment.created}
							history={this.state.history}
							className="parent"
						/>
					</div>
				);
			});

			return (
				<ul className="list-group" id="feed">
					{
						this.state.isLoading > 0
						? <li
							style={{textAlign: 'center'}}
							className="list-group-item">
								Loading...
						  </li>
						: (this.state.history.length > 0
						  ? comments
						  : <li
						  		style={{textAlign: 'center'}}
								className="list-group-item"
							>
								"Error loading comments"
							</li>)
					}
				</ul>
			);
	}
}

export default Feed;