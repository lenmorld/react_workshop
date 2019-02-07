import React from "react";
import Item from "./Item";

class List extends React.Component {
	render() {
		var list = this.props.list;
		return (
			<div>
				<h3>{this.props.name}</h3>
				<hr />
				{
					list.map(function (item) {
						return (
							<Item item={item}
									key={item.id} />
						)
					})
				}
			</div>
		);
	}
}

export default List;
