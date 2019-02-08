import React from 'react';

class ItemForm extends React.Component {

	hideForm() {
		console.log("hide form");
		var modal = document.querySelector('.modal');
		modal.style.display = "none";
	}

	onSubmitForm(event) {
		event.preventDefault(); // prevent reload of page
		// console.log("form submitted");
		this.props.createItem();
	}

	render() {

		var item = this.props.item;

		if (!item) {
			return '';
		}

		return (
			<div className="modal">
				<form>
					<div className="close_form">
						<span onClick={this.hideForm}>[🗙]</span>
					</div>
					<h3>
						{
							this.props.mode === "CREATE" ? "Create a new item" : ''
						}
						{
							this.props.mode === "EDIT" ? "Edit an item" : ''
						}
					</h3>
					<p>
						<label>ID:</label>
						<input name="id"
							onChange={(event) => this.props.onChangeFormInput(event)}
							value={item.id} />
					</p>
					<p>
						<label>Title:</label>
						<input name="title"
							onChange={(event) => this.props.onChangeFormInput(event)}
							value={item.title} />
					</p>
					<p>
						<label>Artist:</label>
						<input name="artist"
							onChange={(event) => this.props.onChangeFormInput(event)}
							value={item.artist} />
					</p>
					<p>
						<label>Album:</label>
						<input name="album"
							onChange={(event) => this.props.onChangeFormInput(event)}
							value={item.album} />
					</p>

					<div className="create">
						<button onClick={(event) => this.onSubmitForm(event) }>
							{this.props.mode}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ItemForm;
