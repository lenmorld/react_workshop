import React from "react";
import ReactDOM from "react-dom";

import UIManager from "./UIManager";
import ApiTest from "./ApiTest";

class App extends React.Component {
	render() {
		// return <UIManager />;
		return <ApiTest />;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
