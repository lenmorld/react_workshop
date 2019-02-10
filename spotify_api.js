var axios = require('axios');
var qs = require('qs');

// generated from Spotify Dev account Client ID, secret
var base64_auth_string = "NmNhYTc4N2YzZWY4NGQ0M2I1ZDVhYmQ0ZWY4ZjUyMjg6MjRlYjI4MzFiNjI0NDM3OGI2ODliOTc4OGEyZjhkMDc=";
var saved_access_token = null;

function getAccessToken() {

	return new Promise(function (resolve, reject) {
		if (saved_access_token) {
			console.log("[SPOTIFY] Using saved access token: ", saved_access_token);
			resolve(saved_access_token);
		} else {
			console.log("[SPOTIFY] Requesting a new access token... ");

			// REQUEST 1: prepare Spotify token request
			var url = 'https://accounts.spotify.com/api/token';
			var auth_data = {
				grant_type: 'client_credentials'
			};

			axios({
				method: 'POST',
				url: url,
				data: qs.stringify(auth_data),
				headers: {
					"Authorization": `Basic ${base64_auth_string}`,
					"Accept": "application/json",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(function (response) {
				// console.log(response.data);
				console.log("[SPOTIFY] Access token: ", response.data.access_token);
				// res.send(response.data.access_token);
				saved_access_token = response.data.access_token;
				resolve(saved_access_token);
			}).catch(function (err) {
				// throw err;
				reject(err);
			});
		}
	});
}


exports.spotify_routes = function (server) {
	server.get('/api/songs', function (req, res) {
		const query_string = req.query.search;
		console.log(`[SPOTIFY] : searching ${query_string}...`);

		getAccessToken().then(function (access_token) {
			const _url = `https://api.spotify.com/v1/search?query=${query_string}&type=track`;

			axios({
				method: 'GET',
				url: _url,
				headers: {
					"Authorization": `Bearer ${access_token}`,
					"Accept": "application/json"
				}
			}).then(function (_res) {
				// inspect response data
				// console.log(`search response: ${JSON.stringify(_res.data)}`);
				res.send(_res.data.tracks.items);
			}).catch(function (err) {
				throw err;
			});
			// res.send({ search: query_string, access_token: access_token });
		});

		// sample response for testing
		// res.send({ search: req.params.query });
	});
}
