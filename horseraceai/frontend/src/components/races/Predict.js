import React, { useState } from 'react';
import axios from 'axios';
import inputFeatures from '../../const/inputFeatures';
import dummyData from '../../../../dummydata/inputdata.json';

export default function Predict(props) {
  const { race } = props;
  const { horses } = props;
  const [predict, setPredict] = useState();

  const predictRace = async (raceData) => {
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.defaults.xsrfCookieName = 'csrftoken';
    const response = await axios.post('/api/predict', raceData);
    console.log(response);
    setPredict(response.data['win horse number']);
  };

  const makeJsonData = () => {
    const data = {};
    const raceDate = new Date(race.date_time);
    const timeHour = raceDate.getHours();
    const month = raceDate.getMonth();
    let season;
    if (month >= 3 && month <= 5) {
      season = '春';
    } else if (month >= 6 && month <= 8) {
      season = '夏';
    } else if (month >= 9 && month <= 11) {
      season = '秋';
    } else {
      season = '冬';
    }

    data.data = [];
    for (let horseInd = 0; horseInd < horses.length; horseInd += 1) {
      data.data.push({});
      for (let featureInd = 0; featureInd < inputFeatures.length; featureInd += 1) {
        data.data[horseInd][inputFeatures[featureInd]] =
          horses[horseInd][inputFeatures[featureInd]];
      }
    }

    for (let horseInd = 0; horseInd < horses.length; horseInd += 1) {
      data.data[horseInd].place = race.place;
      data.data[horseInd].race_horse_number = race.race_horse_number;
      data.data[horseInd].distance = race.distance;
      data.data[horseInd].clockwise = race.clockwise;
      data.data[horseInd].field_type = race.field_type;
      data.data[horseInd].field_condition = race.field_condition;
      data.data[horseInd].weather = race.weather;
      data.data[horseInd].time_hour = timeHour;
      data.data[horseInd].season = season;
    }

    const jsonData = JSON.stringify(data);
    return jsonData;
  };

  return (
    <>
      <td>
        {predict || (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              const data = makeJsonData();
              predictRace(data);
            }}
          >
            結果予測
          </button>
        )}
      </td>
    </>
  );
}
