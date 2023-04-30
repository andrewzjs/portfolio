import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter } from 'react-router-dom';
import { scrollSpy, scroller } from 'react-scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

scrollSpy.update();
scroller.scrollTo('about', {
  duration: 0,
  delay: 0,
  smooth: 'easeInOutQuart',
  offset: -50,
});