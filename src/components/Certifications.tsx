import './Certifications.css'
import VisibilitySensor from "react-visibility-sensor";
import pfe from '../assets/images/certificates/pfe.png';
import dfe from '../assets/images/certificates/dfe.png';
import p3p from '../assets/images/certificates/p3p.png';
import sid from '../assets/images/certificates/sid.png';
import gis from '../assets/images/certificates/gis.png';
import {
    BsArrowBarRight,
    BsArrowReturnRight,
    BsArrowRight,
    FaLocationArrow, FcNext, FcPrevious,
    GrLinkNext, GrNext,
    GrPrevious
} from "react-icons/all";
import {useState} from "react";

export const Certifications = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(3);
        }
    }

    const setView = (isVisible:boolean, cert:string) => {
        if (isVisible){
            setCurrentCert(cert);
        }
    }

    const [currentCert, setCurrentCert] = useState("1");

    return (

        <div className="Certifications flex flex-col justify-center items-center md:py-2 h-full max-h-full" id='certificate'>

            <div className="flex flex-col md:flex-row md:justify-around items-center h-full max-w-full m-2">
                <div className={"certificationsBox flex flex-col"}>
                    <div className={"text-center"}>
                        Certificates
                    </div>
                    <hr/>
                    <VisibilitySensor onChange={onChange}>
                    <div className="courses flex flex-col mt-2 overflow-auto">
                        <div className={"flex items-center justify-between"}>
                            <div className={currentCert=="1"?"rounded-full bg-red-800 p-2":"rounded-full bg-blue-800 p-2"}><BsArrowReturnRight/></div>
                            <div>Google IT Specialization</div>
                            <div>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5VUJUTG74R2B">
                                    <FaLocationArrow/>
                                </a>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={currentCert=="2"?"rounded-full bg-red-800 p-2":"rounded-full bg-blue-800 p-2"}><BsArrowReturnRight/></div>
                            <div>Swift 5 IOS Development Specialization</div>
                            <div>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/TD3JXKZUCVPL">
                                    <FaLocationArrow/>
                                </a>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={currentCert=="3"?"rounded-full bg-red-800 p-2":"rounded-full bg-blue-800 p-2"}><BsArrowReturnRight/></div>
                            <div>Python For Everybody Specialization</div>
                            <div>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/8SXL9HJSSHHE">
                                    <FaLocationArrow/>
                                </a>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={currentCert=="4"?"rounded-full bg-red-800 p-2":"rounded-full bg-blue-800 p-2"}><BsArrowReturnRight/></div>
                            <div>Python 3 Specialization</div>
                            <div>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/BZCRXL2932KJ">
                                    <FaLocationArrow/>
                                </a>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={currentCert=="5"?"rounded-full bg-red-800 p-2":"rounded-full bg-blue-800 p-2"}><BsArrowReturnRight/></div>
                            <div>Django For Everybody Specialization</div>
                            <div>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/WGKJT6WC8745">
                                    <FaLocationArrow/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </VisibilitySensor>
                </div>

                <div className='certificates flex w-full items-center justify-center'>
                    <div className={"flex flex-col h-full justify-center items-center text-white mx-2"}>
                        <div>
                        <a href={currentCert=="1"?"#5":`#${parseInt(currentCert) - 1}`} onClick={()=>console.log(currentCert)}>
                            <div className={"icon rounded-full p-2 text-white"}>
                                <FcPrevious/>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className={"certificateImage flex  flex-col max-h-full flex-wrap overflow-x-scroll overflow-y-hidden"}>
                        <div className='h-full w-full' id={"1"}>
                            <VisibilitySensor onChange={(isVisible)=>setView(isVisible, "1")}>
                                <img src={gis} className='object-contain h-full w-full'/>
                            </VisibilitySensor>
                        </div>
                        <div className='h-full w-full' id={"2"}>
                            <VisibilitySensor onChange={(isVisible)=>setView(isVisible, "2")}>
                                <img src={sid} className='mx-0 my-0 h-full w-full object-contain'/>
                            </VisibilitySensor>
                        </div>
                        <div className='h-full w-full' id={"3"}>
                            <VisibilitySensor onChange={(isVisible)=>setView(isVisible, "3")}>
                                <img src={pfe} className='mx-0 my-0 object-contain'/>
                            </VisibilitySensor>
                        </div>
                        <div className='h-full w-full' id={"4"}>
                            <VisibilitySensor onChange={(isVisible)=>setView(isVisible, "4")}>
                                <img src={p3p} className='mx-0 my-0 h-full w-full object-contain'/>
                            </VisibilitySensor>
                        </div>
                        <div className='h-full w-full' id={"5"}>
                            <VisibilitySensor onChange={(isVisible)=>setView(isVisible, "5")}>
                                <img src={dfe} className='mx-0 my-0 h-full w-full'/>
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className={"flex flex-col h-full justify-center align-center text-white mx-2"}>
                        <a href={`#${parseInt(currentCert) % 5 + 1 }`} onClick={()=>console.log(currentCert)}>
                            <div className={"icon rounded-full p-2 text-white"}>
                                <FcNext/>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>

    )
}
