import React from 'react';
import ReactDOM from 'react-dom/client';

// Import de React-Router
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
