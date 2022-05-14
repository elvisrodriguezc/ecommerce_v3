import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Redux
import { Provider } from 'react-redux';
import store from './Reducer/store';
import Router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);