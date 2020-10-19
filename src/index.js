import React from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './App';
import AppNew from './AppNew';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
// import Details from './Details';
import Routes from './Routes';


ReactDOM.render(
  <Provider store={store}>   
  <Router>
  <AppNew />
  <Routes />
  

  </Router>,
</Provider>,
  
  
  document.getElementById('root'));


