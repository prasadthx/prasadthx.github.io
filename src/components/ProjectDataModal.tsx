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
        <div className="projectModal flex flex-col py-5">
            <div className="relative -top-5 text-center bg-blue-600 w-full my-0 rounded-t-xl">Project Details <IoIosCloseCircle className="absolute top-1 ml-2.5 text-red-300" style={{float:'right'}} onClick={(e)=>setShowInfo(false)}/></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className="w-1/5"> Title :             </div> <div className='w-4/5'>{currentProject[0]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className="w-1/5"> Status :            </div> <div className='w-4/5'>{currentProject[1]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className="w-1/5"> SourceCodeURL :     </div> <div className='w-4/5'><a href={currentProject[2]} className='text-blue-600'>{currentProject[2]}</a></div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className="w-1/5"> Technologies Used : </div> <div className='w-4/5'>{currentProject[3]}</div></div>
            <div className="flex my-2 mx-5 flex-wrap"> <div className="w-1/5"> Description :       </div> <div className='w-4/5'>{currentProject[4]}</div></div>
        </div>
    )
}