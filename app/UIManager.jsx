import React from "react";
import data from "./data";

import Header from './Header';
import List from './List';

console.log(data);

class UIManager extends React.Component {
	constructor() {
		super();
		this.state = {
			listName: "The list",
			list: data.music
		}
	}

	render() {
		return (
			<div>
				<Header />
				<List name={this.state.listName} list={this.state.list}/>
			</div>

		);
	}
}

export default UIManager;
