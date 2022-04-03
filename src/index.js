import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import AppRouter from './Router/AppRouter';
import './styles/CSS/main.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);