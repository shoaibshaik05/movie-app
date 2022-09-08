import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';


import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';



const logger = ({dispatch, getState}) => (next) => (actions) => {
  if(typeof actions !== 'function'){
    console.log('ACTION_TYPE' , actions.type);
  }
  next(actions);
}


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })

// console.log('After State', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

