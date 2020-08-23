import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dummyData from '../../../../dummydata/inputdata.json';

export default function Predict(props) {
  const [predict, setPredict] = useState('predicting...');
  const predictRace = (raceData) => {
    const response = axios.post('/api/predict', raceData);
    setPredict(response.data);
  };
  const makeJsonData = (raceData) => {
    const data = {};
    data.data = [raceData];
    const jsonData = JSON.stringify(data);
    return jsonData;
  };
  const readDummyData = () => {
    const jsonData = JSON.stringify(dummyData);
    return jsonData;
  };

  useEffect(() => {
    predictRace(readDummyData());
  }, []);

  return (
    <div>
      <td>hoge</td>
    </div>
  );
}
