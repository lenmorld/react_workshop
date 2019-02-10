import React from "react";

class ApiTest extends React.Component {

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
