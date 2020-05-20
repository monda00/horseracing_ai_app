import axios from 'axios';

import GET_RACES from './types';

// GET RACES
const getRaces = () => (dispatch) => {
  axios.get('/api/races').then((res) => {
    dispatch({
      type: GET_RACES,
      payload: res.data,
    });
  });
};

export default getRaces;
