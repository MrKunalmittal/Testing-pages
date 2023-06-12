import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Router must be available in entire app
//
root.render(
  <React.StrictMode>
    <Router
    basename='/Testing-pages'>
      <App/>
    </Router>
    
  </React.StrictMode>
);


