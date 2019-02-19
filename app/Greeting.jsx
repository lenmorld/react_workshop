import React from "react";
import qs from "qs";

class Greeting extends React.Component {
	render() {
		// debugger;
		const { text, location, match } = this.props;
		const lang = match.params.lang;
		const name = qs.parse(location.search, { ignoreQueryPrefix: true }).name;
		return (
			<div>
				<h1>Greeting page</h1>
				<h4>lang: {lang}</h4>
				<p>
					{text} {name} 
				</p>
			</div>
		);
	}
}

export default Greeting;
