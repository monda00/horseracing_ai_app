import React, { Component } from 'react';
import axios from 'axios';

function Result(props) {
  return (
    <button className="resutl" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Race extends Component {
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
    return axios
      .post('http://localhost:8000/api/predict/', {
        reqMsg: race_id
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleClick(race_id) {
    this.state.result[race_id] = this.getResult(race_id);
  }

  renderResult(race_id) {
    return <Result
      value={this.state.result[race_id]}
      onClick={() => this.handleClick(race_id)}
    />;
  }

  render() {
    return (
      <div>
        {this.state.races.map(item => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.date}</p>
            <p>{item.result}</p>
            <p>{this.renderResult(item.name)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Race;

