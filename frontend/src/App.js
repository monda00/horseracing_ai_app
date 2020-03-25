import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      result: []
    }
  }

  componentDidMount() {
    this.getRaces();
  }

  getRaces() {
    axios
      .get('http://localhost:8000/api/races/')
      .then(res => {
        this.setState({
          races: res.data,
          result: this.state.result
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getResult(race_id) {
    axios
      .post('http://localhost:8000/api/predict', {
        reqMsg: race_id
      })
      .then(res => {
        this.setState({
          reaces: this.state.races,
          result: res.data });
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
            <p>{this.getResult(item.name)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

