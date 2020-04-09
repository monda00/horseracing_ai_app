import React, { Component } from 'react';
import axios from 'axios';

class Races extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
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
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.races.map(item => (
            <Race value={item}/>
        ))}
      </div>
    );
  }
}

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.value.name,
      date: props.value.date
    }
  }

  getResult(race_id) {
    axios
      .post('http://localhost:8000/api/predict/', {
        reqMsg: race_id
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default Races;
