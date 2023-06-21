import React from 'react';
import ReactDOM from 'react-dom/client';
import Myroute from './Myroute';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myroute />
  </React.StrictMode>
);
