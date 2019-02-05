import React from 'react';
import ReactDOM from 'react-dom';

import UIManager from './UIManager';

class App extends React.Component {
  render() {
    return (
      <UIManager />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));