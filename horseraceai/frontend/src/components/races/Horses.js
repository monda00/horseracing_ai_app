import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Horses(props) {
  const [horses, setHorses] = useState([]);
  const getHorseDetailByRace = (race_id) => {
    axios.get(`/api/horses/race/${race_id}`).then((res) => {
      return res.data;
    });
  };
  useEffect(() => {
    setHorses(getHorseDetailByRace(props.race_id));
  }, [horses]);

  return <td>hoge</td>;
}
