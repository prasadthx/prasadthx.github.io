import './App.css';
import { useState } from "react";
import { FirstPage } from "./components/FirstPage";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { NavigationSidebar } from "./components/NavigationSidebar";
import Div100vh from "react-div-100vh";
import useVH from "react-viewport-height";

function App() {
    const vh = useVH();

    const [currentPage, setCurrentPage] = useState(1)

    return (

        <div className="App flex flex-col md:flex-row z-1">

            <div className="Content h-full">

                <FirstPage setPage={setCurrentPage}/>
                <Interests setPage={setCurrentPage}/>
                <Certifications setPage={setCurrentPage}/>
                <Projects setPage={setCurrentPage}/>

            </div>

            <div className={"NavSidebar h-full w-full"}>
                <NavigationSidebar currentPage={currentPage}/>
            </div>

        </div>
  );
}

export default App;
