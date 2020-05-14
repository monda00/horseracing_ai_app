import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Races from './races/Races';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Races />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
