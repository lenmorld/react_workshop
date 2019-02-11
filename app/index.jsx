import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import UIManager from "./UIManager";
import Giphy from "./Giphy";

class App extends React.Component {
	render() {
		return <BrowserRouter>
			<div>
				{/* nav links to take us to the route */}
				<nav>
					<ul>
						<li><Link to="/">Songs</Link></li>
						<li><Link to="/memes">Memes</Link></li>
					</ul>
				</nav>

				{/* match route to React component */}
				<Route exact path="/" component={UIManager} />
				<Route exact path="/memes" component={Giphy} />
			</div>
		</BrowserRouter>

	}
}

ReactDOM.render(<App />, document.getElementById("app"));
