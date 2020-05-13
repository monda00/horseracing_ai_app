import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';

class App extends PureComponent {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
