import './App.css';
import {useState} from "react";
import {FirstPage} from "./components/FirstPage";
import {Interests} from "./components/Interests";
import {Projects} from "./components/Projects";
import {Certifications} from "./components/Certifications";
// @ts-ignore
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App flex">

        <div className="Content h-full">
            {/*<BrowserRouter>*/}
                <FirstPage/>
                <Interests/>
                <Certifications/>
                <Projects/>
            {/*</BrowserRouter>*/}
        </div>
        <div className={"NavSidebar h-full"}>
          Nav
        </div>
    </div>
  );
}

export default App;
