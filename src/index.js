import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// middleware
// this func will get an obj as arg
// and this obj will contain two properties dispatch & getState
// these are the funcs which are in the store 
// redux will auto'ly pass those to logger func
// function logger (obj, next, action)
// logger(obj)(next)(action)
// const logger = function({dispatch, getState}) {
//   return function (next) {
//     return function (action) {
//       // middleware code to console log actions
//       console.log('Action_Type = ', action.type);
//       next(action);
//     }
//   }
// }

// using arrow function
const logger = ({dispatch, getState}) => (next) => (action) => {
// logger code
if(typeof action !== 'function') {
console.log('Action_Type = ', action.type);
}
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function') {
//     // call the func(action) giving dispatch as arg
//     action(dispatch);
//     return;
//   }
//     next(action);
//   }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('after state', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


