import { combineReducers } from 'redux';

const animes = (state = [], action) => {
  switch (action.type) {
    case 'ANIMES_LOADED':
      return action.animes;
    default:
      return state;
  }
}

export default combineReducers({ animes });
