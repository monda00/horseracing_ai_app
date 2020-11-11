import React, { useState } from 'react';
import axios from 'axios';
import inputFeatures from '../../const/inputFeatures';

export default function Predict(props) {
  const { race } = props;
  const { horses } = props;
  const [predict, setPredict] = useState();

  const predictRace = async (raceData) => {
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.defaults.xsrfCookieName = 'csrftoken';
    const response = await axios.post('/api/predict', raceData);
    console.log(response);
    console.log('before: ', predict);
    setPredict(response.data['win horse number']);
    console.log('after: ', predict);
  };

  const makeJsonData = () => {
    const data = {};
    const raceDate = new Date(race.date_time);
    const timeHour = raceDate.getHours();
    const month = raceDate.getMonth();
    const dataLength = 18;
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

    // 足りないデータを追加
    for (let dataInd = horses.length; dataInd < dataLength; dataInd += 1) {
      data.data.push({});
      for (let featureInd = 0; featureInd < inputFeatures.length; featureInd += 1) {
        data.data[dataInd][inputFeatures[featureInd]] = 0;
      }
      data.data[dataInd].place = 0;
      data.data[dataInd].race_horse_number = 0;
      data.data[dataInd].distance = 0;
      data.data[dataInd].clockwise = 0;
      data.data[dataInd].field_type = 0;
      data.data[dataInd].field_condition = 0;
      data.data[dataInd].weather = 0;
      data.data[dataInd].time_hour = 0;
      data.data[dataInd].season = 0;
    }

    return data;
  };

  return (
    <>
      <td>
        {predict || (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              predictRace(makeJsonData());
            }}
          >
            予測
          </button>
        )}
      </td>
    </>
  );
}
