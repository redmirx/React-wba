import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import State from './state';
import Reducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reducer />
  </React.StrictMode>
);
