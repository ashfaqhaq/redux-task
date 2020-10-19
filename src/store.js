import { combineReducers, applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from "redux-promise-middleware"
import reducer from "./reducers"
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistedReducer = persistReducer(persistConfig, reducer)





const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const middleware = applyMiddleware(thunk);


const store = createStore(
    reducer, 
    persistedState,
    middleware
  )
  
  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store

