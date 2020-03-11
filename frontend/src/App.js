import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    races: []
  };

  componentDidMount() {
    this.getRaces();
  }

  getRaces() {
    axios
      .get('http://localhost:8000/api/races/')
      .then(res => {
        this.setState({ races: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.races.map(item => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.date}</p>
            <p>{item.result}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

