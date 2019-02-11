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
				// console.log(res);
				const memes = res.data.data;
				this.setState({
					memes: memes,
				})
			});
	}

	render() {
		if (this.state.memes.length === 0) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				{this.state.memes.map((item) =>
					<div key={item.id}>
						<iframe src={item.embed_url} width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
					</div>
				)}
			</div>
		);
	}
}

export default Giphy;
