import React from "react";
import './ProjectModal.css';
import {projects} from './ProjectData';
import { IoIosCloseCircle } from "react-icons/all";

export const ProjectDataModal = ({showInfo, toOpen, setShowInfo}:any) => {
    if(!showInfo){
        return null;
    }
    // @ts-ignore
    const currentProject = projects[toOpen]
    return (
        <div className="projectModal flex flex-col py-5 my-2">
            <div className="relative -top-5 text-center bg-blue-600 w-full my-0 rounded-t-xl">Project Details <IoIosCloseCircle className="absolute top-1 ml-2.5 text-red-300" style={{float:'right'}} onClick={(e)=>setShowInfo(false)}/></div>
            <div className="renderer flex flex-col overflow-y-scroll">
            <div className="flex my-2 mx-5 flex-wrap"> <div className=""> Title :             </div> <div className=''> {currentProject[0]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className=""> Status :            </div> <div className=''> {currentProject[1]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className=""> SourceCodeURL :     </div> <div className='max-w-full'> <a href={currentProject[2]} className='text-blue-600 break-word'> <div className='break-word'>{currentProject[2]}</div></a></div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className=''> Technologies Used : </div> <div className=''> {currentProject[3]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className=""> Description :       </div> <div className=''> {currentProject[4]}</div></div>
            </div>
        </div>
    )
}