import React from 'react';
import Predict from './Predict';

function Race(props) {
  const raceInfo = props.race;
  return (
    <>
      <td>{raceInfo.name}</td>
      <td>{raceInfo.date}</td>
      <td>{raceInfo.result}</td>
      <Predict />
    </>
  );
}

export default Race;
