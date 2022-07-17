import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './hello/Hello';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar/Navbar';
import Counts from './counts/Counts';
import Quotes from './quotes/Quotes';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path='hello' element={<Hello />} />
      <Route path='counts' element={<Counts />} />
      <Route path='quotes' element={<Quotes />} />
    </Routes>
  </div>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
