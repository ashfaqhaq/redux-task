import React from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './App';
import AppNew from './AppNew';
import store from './store'
import { Provider } from 'react-redux'




ReactDOM.render(
  <Provider store={store}>   
   
  <AppNew />
  
</Provider>,
  
  
  document.getElementById('root'));


