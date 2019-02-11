import React from "react";
import axios from "axios";

const GIPHY_API_KEY = "MPHyugKqout4DfiKhja9Oy33uLghaigg";
const SEARCH_QUERY = "classic+memes";
const RESULTS_LIMIT = 5;

class Giphy extends React.Component {
	constructor() {
		super();
		this.state = {
			memes: [],
		};

		// React refs for searchQuery and resultsLimit
		this.searchQueryInput = React.createRef();
		this.resultsLimitInput = React.createRef();
	}

	componentDidMount() {
		axios.get(`http://api.giphy.com/v1/gifs/search?q=${SEARCH_QUERY}&api_key=${GIPHY_API_KEY}&limit=${RESULTS_LIMIT}`)
			.then((res) => {
				// console.log(res);
				const memes = res.data.data;
				this.setState({
					memes: memes,
				})
			});
	}

  // a handler is needed to submit form,
  // but no event handler needed for text input
  // since we are accessing inputs directly using refs
  submitSearch(event) {
	// access input value through refs
	// instead of having it in state
	const searchQuery = this.searchQueryInput.current.value;
	const resultsLimit = this.resultsLimitInput.current.value;

	console.log(`${searchQuery} : ${resultsLimit}`);

	// execute request
	axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${GIPHY_API_KEY}&limit=${resultsLimit}`)
	.then((res) => {
		// console.log(res);
		const memes = res.data.data;
		this.setState({
			memes: memes,
		})
	});

	// prevent page from reloading
	event.preventDefault();
 }

	render() {
		if (this.state.memes.length === 0) {
			return <div>Loading...</div>;
		}
		return (
			<div style={{marginTop: '20px'}}>
				<form>
					<p>Search: <input type="text" ref={this.searchQueryInput} style={{ border: '1px solid green' }} /></p>
					<p>Count: <input type="number" ref={this.resultsLimitInput} style={{ border: '1px solid green' }}/></p>
					<div className="spotify_input">
						<button onClick={(event) => {this.submitSearch(event)}}>SEARCH!</button>
					</div>
				</form>
				<div className="items_grid">
					{this.state.memes.map((item) =>
						<div key={item.id}>
							<iframe src={item.embed_url} width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Giphy;
