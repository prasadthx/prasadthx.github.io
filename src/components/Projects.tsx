import './Projects.css'

export const Projects = (props:any) => {
    return (
        <div className="Projects flex flex-col justify-evenly items-center">
            <div>Projects</div>
            <div className="projects flex flex-wrap justify-evenly items-center">
                <div className="flex-1">Angular Video Conferencing App (WebRTC)</div>
                <div className="flex-1">NodeJS Signaling Server</div>
                <div className="flex-1">ReactJS Twitter Clone (FrontEnd Only)</div>
                <div className="flex-1">React Native Media Player</div>
                <div className="flex-1">Dnyaan Learning Management System (ReactJS and NestJS)</div>
                <div className="flex-1">NewLang Language (LLVM)</div>
                <div className="flex-1">College Discussion Forum (Django)</div>
                <div className="flex-1">Blog App (Ruby on rails)</div>
                <div className="flex-1">Window Shopper (IOS)</div>
                <div className="flex-1">Real Time Messaging App</div>
            </div>
            <div>
                <small>Click on a project to view more information</small>
            </div>
        </div>
    )
}