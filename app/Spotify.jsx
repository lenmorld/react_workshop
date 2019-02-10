import React from 'react';
import axios from 'axios';

class Spotify extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		}
	}

	trackSearchTerm(event) {
		var searchTerm = event.target.value;
		// console.log(`[Spotify.jsx] ${search_term}`);

		this.setState({
			searchTerm: searchTerm
		});
	}

	searchSpotify() {
		axios.get(`/api/songs?search=${this.state.searchTerm}`)
			.then((res) => {
				// debugger;
				// console.log(res.data);

				const searchResults = res.data;
				const squashedResults = searchResults.map((track) => {
					return {
						id: track.id,
						artist: track.artists[0].name,
						album: track.album.name,
						title: track.name
					};
				});

				console.log(squashedResults);
			})
			.catch((err) => {
				console.log(`[Spotify.jsx] search error: ${err}`);
			});
	}

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
