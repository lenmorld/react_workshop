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
	}

	componentDidMount() {
		axios.get(`http://api.giphy.com/v1/gifs/search?q=${SEARCH_QUERY}&api_key=${GIPHY_API_KEY}&limit=${RESULTS_LIMIT}`)
			.then((res) => {
				console.log(res);
			});
	}

	render() {
		return (
			<div>
				Try the Giphy API!
			</div>
		);
	}
}

export default Giphy;
