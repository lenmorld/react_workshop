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
			list: data.music,
			searchTerm: '',
		}
	}

	searchList(event) {
		var searchTerm = event.target.value;
		// debugger;
		console.log(`${this.state.searchTerm} ->  ${searchTerm}`);

		this.setState({
			searchTerm: searchTerm
		});
	}

	render() {
		// filter list based on current user input -> searchTerm
		var list = this.state.list;
		var searchTerm = this.state.searchTerm;
		var filteredList;

		if (!searchTerm) {
			filteredList = list;
		} else {
			filteredList = list.filter(function (item) {
				return item.title.toLowerCase().includes(searchTerm.toLowerCase());
			});
		}

		return (
			<div>
				<Header />
				<div className="options">
					<input type="text"
						placeholder="Filter..."
						onChange={(event) => this.searchList(event)} />
				</div>
				<List name={this.state.listName} list={filteredList} />
			</div>

		);
	}
}

export default UIManager;
