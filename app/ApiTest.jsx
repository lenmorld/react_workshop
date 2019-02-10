import React from "react";
import axios from "axios";

const GIPHY_API_KEY = "MPHyugKqout4DfiKhja9Oy33uLghaigg";
const SEARCH_QUERY = "classic+memes";
const RESULTS_LIMIT = 5;

class ApiTest extends React.Component {
	componentDidMount() {
		axios.get(`http://api.giphy.com/v1/gifs/search?q=${SEARCH_QUERY}&api_key=${GIPHY_API_KEY}&limit=${RESULTS_LIMIT}`)
			.then((res) => {
				console.log(res);
			});
	}

	constructor() {
		super();
		this.state = {
			memes: [],
		};
	}

	render() {
		return (
			<div>
				Try out some API!
			</div>
		);
	}
}

export default ApiTest;
