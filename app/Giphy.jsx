import React from "react";

class Giphy extends React.Component {

	constructor() {
		super();
		this.state = {
			memes: [],
		};
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
