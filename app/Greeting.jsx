import React from "react";
import qs from "qs";

class Greeting extends React.Component {
	render() {
		// debugger;
		const { text, location } = this.props;
		const name = qs.parse(location.search, { ignoreQueryPrefix: true }).name;
		return (
			<div>
				<h1>Greeting page</h1>
				<p>
					{text} {name}
				</p>
			</div>
		);
	}
}

export default Greeting;
