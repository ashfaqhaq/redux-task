import React from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './App';
import App from './App';
// import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
// import Details from './Details';
// import Routes from './Routes';
import cartReducer from './reducers/cartReducer';
import { createStore } from 'redux';

const store = createStore(cartReducer);
ReactDOM.render(
  <Provider store={store}>   
  
  <App/>
  
</Provider>,
  
  
  document.getElementById('root'));


