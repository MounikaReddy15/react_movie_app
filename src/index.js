import React from 'react';
import { Provider } from "react-redux";
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

// export const StoreContext = createContext();
// console.log(StoreContext, 'StoreContext')

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('after state', store.getState());

// class Provider extends React.Component {
//   render () {
//     const {store} = this.props;
//    return <StoreContext.Provider value = {store}>
//      {this.props.children}
//     </StoreContext.Provider>  
//   }
// }

// const connectedAppComponent = connect(callback) returns func (App) returns compo;
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//     //  subscribe to store to auto rerender
//      constructor(props) {
//        super(props)
//        //  subscribe will return another func which we can use to unsubscribe store
//        this.unsubscribe =  this.props.store.subscribe(() => this.forceUpdate());
//      }

//      //when connected compo is destroyed we shud unsubscribe  
//      componentWillUnmount () {
//        this.unsubscribe();
//      }
     
//       render () {
//         const { store } = this.props;
//         const state = store.getState();
//           const dataToBePassedAsProps = callback(state);
//             return (
//               <Component 
//               {...dataToBePassedAsProps}
//               dispatch = {store.dispatch}
//               />
//             );
//       }
//     }

//     // to get access of store in constructor we are wrapping the app
//       class ConnectedComponentWrapper extends React.Component {
//         render () {
//          return (
//          <StoreContext.Consumer>
//             {store => <ConnectedComponent store = {store} />}
//           </StoreContext.Consumer>
//          );
//         }
//       }
//       return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
 <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);


