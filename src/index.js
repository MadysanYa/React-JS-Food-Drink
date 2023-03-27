import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// STYLE
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

// SCRIPT
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
