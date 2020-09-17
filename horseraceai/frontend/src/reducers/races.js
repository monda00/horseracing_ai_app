import GET_RACES from '../actions/types';

const initialState = {
  races: [],
  totalRaces: 0,
  itemCountPerPage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RACES:
      return {
        ...state,
        races: action.payload.results,
        totalRaces: action.payload.count,
        itemsCountPerPage: action.payload.results.length,
      };
    default:
      return state;
  }
};
