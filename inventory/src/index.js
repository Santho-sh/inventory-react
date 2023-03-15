import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App  from './App';

// To Run Json Server: json-server --watch -p 4000 db.json

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

