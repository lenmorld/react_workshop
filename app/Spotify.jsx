import React from 'react';
import axios from 'axios';

import List from './List';

class Spotify extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			searchResults: [],
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

				// update state with search results
				this.setState({
					searchResults: squashedResults
				});
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
					<List list={this.state.search_results}
                          displayType={"spotify_api"}
                          toggleItem={this.props.toggleItemFromSpotify} />
				</div>
			</div>
		);
	}
}

export default Spotify;
