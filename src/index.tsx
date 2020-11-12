import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={appStore}>
  
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);