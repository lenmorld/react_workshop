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

	searchList(event) {
		var searchTerm = event.target.value;
		console.log(searchTerm);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="options">
					<input type="text"
						placeholder="Filter..."
						onChange={this.searchList} />
				</div>
				<List name={this.state.listName} list={this.state.list} />
			</div>

		);
	}
}

export default UIManager;
