
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// FIX: Import HashRouter from react-router-dom instead of accessing it from the window object.
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);