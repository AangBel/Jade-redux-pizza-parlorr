import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const pizzaReducer = (state = [], action) => {


  console.log('action.payload', action.payload);

    if(action.type === 'GET_PIZZA'){
      return action.payload;
    }
    return state;
  }

  const orderList = (state = [], action) => {

    console.log('action.payload.name', action.payload);

    
      if(action.type === 'GET_ORDER'){
        return [...state, action.payload];
      }
      return state;
    }

    const formData = (state = [], action) => {
      if (action.type === `GET_FORM`) {
        return  action.payload
      }
      return state;
    };

  const storeInstance = createStore(
    combineReducers({
      pizzaReducer,
      orderList,
      formData
    }),
    applyMiddleware(logger),
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
    </React.StrictMode>
);

