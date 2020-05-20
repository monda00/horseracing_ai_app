import GET_RACES from '../actions/types';

const initialState = {
  races: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RACES:
      return {
        ...state,
        races: action.payload,
      };
    default:
      return state;
  }
}
