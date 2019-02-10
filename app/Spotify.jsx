import React from 'react';

class Spotify extends React.Component {

	render() {
		return (
			<div className="spotify_modal">
				<div className="spotify_wrapper">
					<div className="close_form">
						<span onClick={this.props.hideSpotify}>[🗙]</span>
					</div>
					<h3>search Spotify</h3>
					<div className="spotify_input">
						<input type="text" onChange={(event) => this.trackSearchTerm(event)} />
						<button onClick={() => this.searchSpotify()}>Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Spotify;
