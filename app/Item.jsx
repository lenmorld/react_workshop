import React from "react";

const Item = (props) => 
		(
			<div className="item">
				<div className="left">
					<iframe src={"https://open.spotify.com/embed/track/" + props.item.id}
						width="80" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media">
					</iframe>
				</div>
				<div className="right">
					<div className="title">{props.item.title}</div>
					<div className="artist">{props.item.artist}</div>
					<div className="album">{props.item.album}</div>
				</div>
			</div>
		)
export default Item;
