import './App.css';
import {useState} from "react";
import {FirstPage} from "./components/FirstPage";
import {Interests} from "./components/Interests";
import {Projects} from "./components/Projects";
import {Certifications} from "./components/Certifications";

function App() {
  const [displaySidebar, onSidebar] = useState(false)
  let sidebarWidth = displaySidebar ? 'w-full' : 'w-0';
  return (
    <div className="App flex">
        <div className="Content h-full bg-black">
            <FirstPage/>
            <Interests/>
            <Certifications/>
            <Projects/>
        </div>
        <div className={"NavSidebar h-full" + sidebarWidth} onMouseOver={(event) => {onSidebar(true);console.log(sidebarWidth)}}>
          Nav
        </div>
    </div>
  );
}

export default App;
