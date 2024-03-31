import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'; 
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//import { StateContextProvider } from './Context/context.js'

// ReactDOM.render(
  
//   <>
//    <App />
//  </>,
   
 
//  document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);