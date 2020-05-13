import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class App extends PureComponent {
  render() {
    return <h1>React App</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
