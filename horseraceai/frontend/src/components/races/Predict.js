import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dummyData from '../../../../dummydata/inputdata.json';

export default function Predict(props) {
  const [predict, setPredict] = useState('predicting...');
  const predictRace = async (raceData) => {
    const response = await axios.post('/api/predict', raceData);
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

  return (
    <>
      <td>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            predictRace(readDummyData());
          }}
        >
          Click
        </button>
      </td>
    </>
  );
}
