import React from "react";
import './ProjectModal.css';
import {projects} from './ProjectData';

export const ProjectDataModal = ({showInfo, toOpen}:any) => {
    if(!showInfo){
        return null;
    }
    // @ts-ignore
    const currentProject = projects[toOpen]
    return (
        <div className="projectModal flex flex-col px-5 py-5">
            <div className="flex my-2 flex-wrap"> <div className="w-1/5"> Title :             </div> <div className='w-4/5'>{currentProject[0]}</div></div>
            <div className="flex my-2 flex-wrap"> <div className="w-1/5"> Status :            </div> <div className='w-4/5'>{currentProject[1]}</div></div>
            <div className="flex my-2 flex-wrap"> <div className="w-1/5"> SourceCodeURL :     </div> <div className='w-4/5'><a href={currentProject[2]}>{currentProject[2]}</a></div></div>
            <div className="flex my-2 flex-wrap"> <div className="w-1/5"> Technologies Used : </div> <div className='w-4/5'>{currentProject[3]}</div></div>
            <div className="flex my-2 flex-wrap"> <div className="w-1/5"> Description :       </div> <div className='w-4/5'>{currentProject[4]}</div></div>
        </div>
    )
}