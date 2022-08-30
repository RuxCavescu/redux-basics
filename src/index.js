import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux'; // -> create the globalised state;
import allReducers from './reducers';
import { Provider } from 'react-redux'; // connects the global state store to our react App

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//STORE - holds all the data or state for the application -> globalied stare

//ACTION - describes what you want to do -> in our case INCREMENT -> function that returns an object!!!

// const increment = () => {
//   return {
//     type: 'INCREMENT', // the name
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT', // the name
//   };
// };

//REDUCER - describes how the ACTIONS transform your state into the next state

// const counter = (state = 0, action) => {
//   // state = 0 is the initial state
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1; // at this point it updates our store
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter); // takes in the REDUCER

//display in the console;
// store.subscribe(() => {
//   console.log(store.getState());
// });

// DISPATCH - this is how we can execute the ACTION -> DISPATCH this ACTION to the REDUCER

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// the ACTION is called; the REDUCER is gonna check which action you did and based on the action is gonna modify our STORE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
