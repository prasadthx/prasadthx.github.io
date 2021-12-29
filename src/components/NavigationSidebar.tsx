import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillHome, TiPointOfInterest, AiFillSafetyCertificate, AiOutlineFundProjectionScreen } from "react-icons/all";
import {useState} from "react";
import './NavigationSidebar.css'

const href = [
    [   '#home',
        'Home',
        <AiFillHome/>
    ],
    [
        '#interests',
        'Interests',
        <TiPointOfInterest/>
    ],
    [
        '#certificate',
        'Certifications',
        <AiFillSafetyCertificate/>
    ],
    [
        '#projects',
        'Projects',
        <AiOutlineFundProjectionScreen/>
    ]
]

export const NavigationSidebar = (props:any) => {
    const [hoverState, setHoverState] = useState(false);
    let pageIndex = props.currentPage
    let classState = hoverState ? 'visible' : 'invisible'
    let dotInvisible = hoverState ? 'invisible' : 'visible'
    return (
        <div className='MainBar w-full h-full max-h-full text-white flex justify-evenly flex-row md:flex-col'>
            <div className={pageIndex==1?'flex-1 md:rounded-bl-xl supporter':'flex-1 supporter'}>

            </div>
            <div className={"menu"}>
                {href.map((value:any, index) => (
                    <div
                        className={getClassName(index, pageIndex)}>
                        <a href={value[0]}>
                            <div className='flex grow-0 flex-row justify-center items-center text-center py-4 px-2'>
                                <div className='rounded-full bg-purple-600 p-2 Icon relative'>
                                    {value[2]}
                                </div>
                                <div className='text-sm invisible NavHead absolute right-10 text-white bg-purple-600 px-3 rounded-l-full'>
                                    {/*{*/}
                                    {/*    pageIndex-1== index? (<small>{value[1]}</small>) : (<></>)*/}
                                    {/*}*/}
                                    <span>{value[1]}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className={pageIndex==4?'flex-1 rounded-tl-2xl supporter':'flex-1 supporter'}>

            </div>
        </div>
    )
}

const getClassName = (index: number, pageIndex:number): string => {
    let className = "";
    if(index==(pageIndex-1)){
        className += 'text-white';
    }
    else{
        className += 'text-white supporter'
    }
    if (index == pageIndex){
        className += ' rounded-tl-2xl'
    }
    if (index == pageIndex - 2){
        className += ' md:rounded-bl-2xl';
    }
    className += ' hover:text-2xl'
    return className;
}
