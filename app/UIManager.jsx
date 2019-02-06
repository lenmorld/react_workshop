import React from "react";
import data from "./data";

import Header from './Header';
import List from './List';

console.log(data);

class UIManager extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<List />
			</div>

		);
	}
}

export default UIManager;
