import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gg from './Gg';
import Describtion from './Describtion';
import Products from './Products';

import A from './A';

import reportWebVitals from './reportWebVitals';
import Dummy from './Dummy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gg />
    <Describtion />
    <Products /> */}
    {/* <SquareArea/><br></br> */}
    {/* <CircleArea/> */}
    {/* <A/> */}
    <Dummy />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
