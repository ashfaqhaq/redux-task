// import { createStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import Counter from './components/Counter'
// import App from './App';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)
// import counterReducer from './reducers/counterReducer'
// const store = createStore(counterReducer)



// console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>    
  <Counter />
  <App/>
</Provider>,
  
  
  document.getElementById('root'));


