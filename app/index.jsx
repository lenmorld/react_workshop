import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  componentDidMount() {
    fetch('/api/json').then((res) => res.json()).then(res => console.log(res));
  }

  render() {
    return <div>React: Hello World!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
