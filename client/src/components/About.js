import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';
import axios from 'axios';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = { md: "Loading..." };
	}

	componentDidMount() {
		axios.get(
			process.env.REACT_APP_API+"content/about.md",
			{ crossorigin: true }
		).then(res => {
			this.setState({ md: res.data });
		});
	}

	render() {
		return (
			<div>
				<h6
					className="text-right"
				><small>
					<Link to='/feed' className="corner-link">Feed</Link>
				</small></h6>

				<h6
					className="text-right"
				><small>
					<Link to='/changelog' className="corner-link">Changelog</Link>
				</small></h6>

				<h2
					className="text-center"
					id="title">About</h2>
				<hr />
				<ReactMarkdown source={this.state.md} />
			</div>
		);
	}
}

export default About;
