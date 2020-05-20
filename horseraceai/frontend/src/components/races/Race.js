import React from 'react';
import Predict from './Predict';

function Race(props) {
  const raceInfo = props.race;
  return (
    <div>
      <h1>{raceInfo.name}</h1>
      <p>{raceInfo.date}</p>
      <p>{raceInfo.result}</p>
      <Predict />
    </div>
  );
}

export default Race;
