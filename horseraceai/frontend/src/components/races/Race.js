import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Predict from './Predict';
import Horses from './Horses';

export default function Race(props) {
  const [race, setRace] = useState(props.race);
  const [horses, setHorses] = useState();

  useEffect(() => {
    axios.get(`/api/horses/race/${props.race.race_id}`).then((res) => {
      setHorses(res.data);
    });
  }, []);

  return (
    <>
      <td>{race.name}</td>
      <td>{race.place}</td>
      <td>{race.distance}</td>
      <td>{race.date_time}</td>
      <td>{race.result}</td>
      <Predict race={race} horses={horses} />
      <Horses horses={horses} />
    </>
  );
}
