import React, { Component } from 'react';
import axios from 'axios';

const beforePredictMessage = '予測します';

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

function Result(props) {
  if (props.value.result == beforePredictMessage) {
    return (
      <button className="predictButton" onClick={props.onClick}>
        {props.value.result}
      </button>
    )
  } else {
    return (
      <p>{props.value.result}</p>
    )
  }
}

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.value.name,
      date: props.value.date,
      result: beforePredictMessage
    }
  }

  getResult(race_id) {
    axios
      .post('http://localhost:8000/api/predict/', {
        reqMsg: race_id
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          result: res.data.message
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleClick(race_name) {
    if (this.state.result == beforePredictMessage) {
      this.getResult(race_name);
    }
  }

  renderResult(race_name) {
    return <Result
      value={this.state}
      onClick={() => this.handleClick(race_name)}
    />;
  }

  render() {
    return (
      <div className="race">
        <h1>{this.state.name}</h1>
        <p>{this.state.date}</p>
        <div className="result">
          {this.renderResult(this.state.name)}
        </div>
      </div>
    );
  }
}

export default Races;
