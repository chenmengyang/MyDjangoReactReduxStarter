/* This file is the entry of the whole frontEnd app (see webpack.config.js)
It give a middleware thunk which enables the async operations in Redux
The store is created and injected into the app
*/
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './myapp/components/App';
import reducer from './myapp/reducers';
import thunk from 'redux-thunk';


const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('top'));