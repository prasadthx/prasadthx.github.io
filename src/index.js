import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import screenfull from "screenfull";

ReactDOM.render(
      <HashRouter>
    <App />
      </HashRouter>
  ,
  document.getElementById('root')
);

// window.addEventListener('load', () => {
//     if (screenfull.isEnabled) {
//         screenfull.request().then(()=>console.log('hello'));
//     } else {
//         // Ignore or do something else
//     }
// });
//
// function toggleFullScreen() {
//     var doc = window.document;
//     var docEl = doc.documentElement;
//
//     var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
//     var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
//
//     if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
//         requestFullScreen.call(docEl);
//     }
//     else {
//         cancelFullScreen.call(doc);
//     }
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
