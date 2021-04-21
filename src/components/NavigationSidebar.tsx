import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillHome, TiPointOfInterest, AiFillSafetyCertificate, AiOutlineFundProjectionScreen } from "react-icons/all";
import {useState} from "react";
import './NavigationSidebar.css'

let classState;
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
        <div
            className='w-full h-full text-white text-2xl flex justify-center flex-col'
            onMouseEnter={ (e) => {setHoverState(true);console.log(classState)}}
            onMouseLeave={ (e) => {setHoverState(false);console.log(classState)}}
        >
            <div>
            {href.map((value:any, index) => (
                <div className={index==(pageIndex-1)?'text-indigo-500':'text-white'}>
                    <a href={value[0]}>
                        {/*<GoPrimitiveDot className={dotInvisible}/>*/}
                        {/*<div className={classState}>*/}
                        {/*    {value[2]}<br/>*/}
                        {/*    {value[1]}*/}
                        {/*</div>*/}

                        { hoverState ?
                            <div className='flex flex-col justify-center items-center text-center my-4'>
                                <div>
                                    {value[2]}
                                </div>
                                <div>
                                    <small>{value[1]}</small>
                                </div>
                            </div> :

                            <GoPrimitiveDot className='my-4 mr-5'/>
                        }
                    </a>
                </div>
            ))}
            </div>
        </div>
    )
}