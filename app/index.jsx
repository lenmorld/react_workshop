import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

import UIManager from "./UIManager";
import Giphy from "./Giphy";
import Greeting from "./Greeting";

class App extends React.Component {
	render() {
		return <HashRouter>
			<div>
				{/* nav links to take us to the route */}
				<nav>
					<ul>
						<li><Link to="/">Songs</Link></li>
						<li><Link to="/memes">Memes</Link></li>
						<li><Link to="/greeting">Greeting</Link></li>
					</ul>
				</nav>

				{/* match route to React component */}
				<Route exact path="/" component={UIManager} />
				<Route exact path="/memes" component={Giphy} />
				<Route exact path="/greeting" render={(props) => <Greeting text="Hello, " {...props} /> } />
			</div>
		</HashRouter>

	}
}

ReactDOM.render(<App />, document.getElementById("app"));
