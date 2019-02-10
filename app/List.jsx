import React from "react";
import Item from "./Item";

class List extends React.Component {
	render() {
		var list = this.props.list;
		return (
			<div>
				<h3>{this.props.name}</h3>
				<hr />
				<div className="items_grid">
					{
						list.map((item) => {
							return (
								<Item item={item}
										key={item.id} 
										deleteItem={this.props.deleteItem}
										editItem={this.props.editItem}
										displayType={this.props.displayType}
										toggleItem={this.props.toggleItem}
										isInStateList={this.props.isInStateList}
									/>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default List;
