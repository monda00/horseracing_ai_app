import React, { Component } from 'react';

import Race from './Race';

export class Races extends Component {
  render() {
    return (
      <div>
        <Race name="hoge" date="xxxx/xx/xx" result="win" />
        <Race name="hoge" date="xxxx/xx/xx" result="win" />
        <Race name="hoge" date="xxxx/xx/xx" result="win" />
        <Race name="hoge" date="xxxx/xx/xx" result="win" />
        <Race name="hoge" date="xxxx/xx/xx" result="win" />
      </div>
    );
  }
}

export default Races;
