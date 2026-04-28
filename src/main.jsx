import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import './estilos/reset.css';
import './estilos/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
