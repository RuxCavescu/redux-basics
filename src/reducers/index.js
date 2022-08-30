// here we can import all the reduceres

import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux'; // combineReducers - combines the reduceres so we can pass it to the store (we can't pass multiple reducers another way)

const allReducers = combineReducers({
  counterReducer: counterReducer,
  loggedReducer: loggedReducer,
});

export default allReducers;
