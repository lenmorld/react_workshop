import React from "react";
import data from "./data";

import Header from './Header';
import List from './List';
import ItemForm from './ItemForm';

console.log(data);

class UIManager extends React.Component {
	constructor() {
		super();
		this.state = {
			listName: "The list",
			list: data.music,
			searchTerm: '',
			formFields: {
				id: '',
				title: '',
				artist: '',
				album: '',
			},
		}
	}

	// data API - CRUD methods
	createItem() {
		// debugger;
		console.log("[UIManager] Create ");

		// get Item data from state
		var item = this.state.formFields;
		// copy list values, not reference, using ES6 spread operator
		var currentListItems = [...this.state.list];
		// add new item
		currentListItems.push(item);
		// apply change to state
		this.setState({
			list: currentListItems
		});

		// empty fields for next round
		this.setState({
			formFields: {
				id: '',
				title: '',
				artist: '',
				album: ''
			}
		});
	}

	searchList(event) {
		var searchTerm = event.target.value;
		// debugger;
		console.log(`${this.state.searchTerm} ->  ${searchTerm}`);

		this.setState({
			searchTerm: searchTerm
		});
	}

	onChangeFormInput(event) {
		// copy values (not reference) using ES6 spread
		var currentListFields = { ...this.state.formFields };    
		// e.g. current_list_fields['artist'] = 'Artist1'
		currentListFields[event.target.name] = event.target.value;
		// apply new value to state
		this.setState({
			formFields: currentListFields
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
				<ItemForm item={this.state.formFields}
							onChangeFormInput={(event) => this.onChangeFormInput(event)} 
							createItem={() => this.createItem() } />
			</div>

		);
	}
}

export default UIManager;
