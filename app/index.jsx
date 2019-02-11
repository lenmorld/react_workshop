import React from "react";
import ReactDOM from "react-dom";

import UIManager from "./UIManager";
import Giphy from "./Giphy";

class App extends React.Component {
	render() {
		// return <UIManager />;
		return <Giphy />;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
