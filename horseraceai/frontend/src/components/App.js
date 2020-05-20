import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store';

import Header from './layout/Header';
import Races from './races/Races';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <div className="container">
            <Races />
          </div>
        </>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
