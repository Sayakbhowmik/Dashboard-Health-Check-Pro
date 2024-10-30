import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure "root" id is in your index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
