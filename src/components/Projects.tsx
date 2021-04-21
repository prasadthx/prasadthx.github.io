import './Projects.css'
import VisibilitySensor from "react-visibility-sensor";

export const Projects = (props:any) => {
    const { inViewport, setPage } = props;
    function onChange (isVisible:any) {
        if (isVisible) {
            setPage(4);
        }
    }
    return (
        <VisibilitySensor onChange={onChange}>
        <div className="Projects flex flex-col flex-wrap justify-evenly items-center viewport-block" id='projects'>
            <div className='text-3xl text-black font-bold'>Projects</div>
            <div className="projects flex flex-wrap justify-center items-center px-10">
                <div className="">Angular Video Conferencing App (WebRTC)</div>
                <div className="">NodeJS Signaling Server</div>
                <div className="">ReactJS Twitter Clone (FrontEnd Only)</div>
                <div className="">React Native Media Player</div>
                <div className="">Dnyaan Learning Management System (ReactJS and NestJS)</div>
                <div className="">NewLang Language (LLVM)</div>
                <div className="">College Discussion Forum (Django)</div>
                <div className="">Blog App (Ruby on rails)</div>
                <div className="">Window Shopper (IOS)</div>
                <div className="">Real Time Messaging App</div>
            </div>
            <div>
                <small>Click on a project to view more information</small>
            </div>
        </div>
        </VisibilitySensor>
    )
}