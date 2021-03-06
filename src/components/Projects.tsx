import './Projects.css'
import VisibilitySensor from "react-visibility-sensor";
import { ProjectDataModal } from "./ProjectDataModal";
import {CSSProperties, useState} from "react";

export const Projects = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(4);
        }
        else {
            setShowInfo(false)
        }

    }

    const [showInfo, setShowInfo] = useState(false);
    const [toOpen, setToOpen] = useState('');

    const showInfoToggle = (toOpen:string) => {
        if (showInfo) {
            setToOpen('');
            setShowInfo(false)
        }
        else {
            setToOpen(toOpen);
            setShowInfo(true);
        }
    }

    const background : CSSProperties = showInfo===true ? {background: 'black'} : {}
    const visibility : CSSProperties = showInfo===true ? {visibility: 'hidden'} : {}

    return (
        <div className="Projects flex flex-col justify-evenly items-center"
             id='projects'
             // onClick={(e)=>{if(showInfo)showInfoToggle('')}}
             style = {background}
        >
            <VisibilitySensor onChange={onChange}>
                <div className='text-3xl text-black font-bold text-center text-white'>Projects <br></br></div>
            </VisibilitySensor>
            {document.documentElement.clientWidth>700?null:<small className="text-center text-white">Click on any project to view more information</small>}
            <div className="projects flex flex-wrap justify-center items-center px-10 overflow-y-scroll" style = {visibility}>
                <div className="" onClick={(e)=>showInfoToggle('AngularWebRTC')}>Angular Video Conferencing App (WebRTC)</div>
                <div className="" onClick={(e)=>showInfoToggle('NodeJS_SignalingServer')}>NodeJS Signaling Server</div>
                <div className="" onClick={(e)=>showInfoToggle('ReactJSTwitterClone')}>ReactJS Twitter Clone (FrontEnd Only)</div>
                <div className="" onClick={(e)=>showInfoToggle('ReactNativeMedia')}>React Native Media Player</div>
                <div className="" onClick={(e)=>showInfoToggle('Dnyaan')}>Dnyaan Learning Management System (ReactJS and NestJS)</div>
                <div className="" onClick={(e)=>showInfoToggle('NewLang')}>NewLang Language (LLVM)</div>
                <div className="" onClick={(e)=>showInfoToggle('CollegeDiscussion')}>College Discussion Forum (Django)</div>
                <div className="" onClick={(e)=>showInfoToggle('BlogApp')}>Blog App (Ruby on rails)</div>
                <div className="" onClick={(e)=>showInfoToggle('IOSShop')}>Window Shopper (IOS)</div>
                <div className="" onClick={(e)=>showInfoToggle('MessageThx')}>Real Time Messaging App</div>
            </div>

            <div>
                <small>Click on a project to view more information</small>
            </div>
            <ProjectDataModal showInfo={showInfo} toOpen={toOpen} setShowInfo={setShowInfo}/>
        </div>

    )
}
