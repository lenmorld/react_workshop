import React from "react";
import Item from "./Item";

class List extends React.Component {
	render() {
		console.log(this.props.list);
		return (
			<div>
				<h3>{this.props.name}</h3>
				{/* <div>List: {this.props.list}</div>  */}
				<hr/>
				<Item />
			</div>
		);
	}
}

export default List;
