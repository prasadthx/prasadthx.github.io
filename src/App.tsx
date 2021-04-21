import './App.css';
import {CSSProperties, useState} from "react";
import {FirstPage} from "./components/FirstPage";
import {Interests} from "./components/Interests";
import {Projects} from "./components/Projects";
import {Certifications} from "./components/Certifications";
// @ts-ignore
import {BrowserRouter, HashRouter, Route, NavLink} from 'react-router-dom';
import {NavigationSidebar} from "./components/NavigationSidebar";
import TrackVisibility from "react-on-screen";
//@ts-ignore
import handleViewport from 'react-in-viewport';
import {Certificate} from "crypto";
import {useInView} from "react-intersection-observer";

function App() {
    const [ref, inView] = useInView({
        threshold: 0,
    })
    const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="App flex">

        <div className="Content h-full">

            {/*<FirstPage/>*/}
            {/*<ViewportBlockFirstPage onEnterViewport={() => {console.log('Before'+currentPage);setCurrentPage(1)}} onLeaveViewport={() => console.log('leave1')}/>*/}
            {/*<ViewportBlockInterestPage onEnterViewport={() => {console.log('Before'+currentPage);setCurrentPage(2)}} onLeaveViewport={() => console.log('leave2')} />*/}
            {/*<ViewportBlockCertificatePage onEnterViewport={() => {console.log('Before'+currentPage);setCurrentPage(3)}} onLeaveViewport={() => console.log('leave3')} />*/}
            {/*<ViewportBlockProjectsPage onEnterViewport={() => {console.log('Before'+currentPage);setCurrentPage(4)}} onLeaveViewport={() => console.log('leave4')} />*/}

            <FirstPage setPage={setCurrentPage}/>
            <Interests setPage={setCurrentPage}/>
            <Certifications setPage={setCurrentPage}/>
            <Projects setPage={setCurrentPage}/>
        </div>
        <div className={"NavSidebar h-full"}>
            <NavigationSidebar currentPage={currentPage}/>
        </div>
    </div>
  );
}

function isInViewport(element:any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const ViewportBlockFirstPage = handleViewport(FirstPage, /** options: {}, config: {} **/);
const ViewportBlockInterestPage = handleViewport(Interests, /** options: {}, config: {} **/);
const ViewportBlockCertificatePage = handleViewport(Certifications, /** options: {}, config: {} **/);
const ViewportBlockProjectsPage = handleViewport(Projects, /** options: {}, config: {} **/);


export default App;
