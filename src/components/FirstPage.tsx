import './FirstPage.css';
import MyPhoto from '../assets/images/prasad.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import {Fade, Slide} from "react-awesome-reveal";

export const FirstPage = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(1);
        }
    }
    return (
        <div className={"w-full h-full relative"}>
            <VisibilitySensor onChange={onChange}>
                <div className={"absolute right-1/2 top-1/2 z-0 opacity-0"}>
                    Hello World
                </div>
            </VisibilitySensor>
            <div className="FirstPage h-full w-full flex justify-center items-center flex-col text-center my-2 relative" id='home'>
                <Fade>
                    <div className="mainFrame flex justify-center items-center flex-col px-5 py-10 mt-16 z-1">
                        <div className="flex justify-center">
                            <img src={MyPhoto} alt=""
                                 className="rounded-full mx-auto absolute -top-28 w-48 h-48 shadow-2xl border-2 border-black"/>
                        </div>
                        <div className="text-5xl mb-4 mt-20">
                            Hello I am Prasad Zore
                        </div>
                        <div className="text-xl mt-2">
                            I am a Tech Enthusiast and a Lifelong tech learner
                        </div>
                    </div>
                </Fade>
                <div className="flex justify-evenly items-center w-2/5 h-1/5 text-3xl z-1">
                    <Slide direction={"down"}>
                        <div className='twitterIcon bg-black px-3 py-3 rounded-full'>
                            <a href="https://twitter.com/prasad_zore"><FaTwitter className='text-blue-600'/></a>
                        </div>
                        <div className='githubIcon bg-black px-3 py-3 rounded-full'>
                            <a href="https://github.com/prasadthx"><FaGithub/></a>
                        </div>
                        <div className='linkedinIcon bg-blue-900 px-3 py-3 rounded-full'>
                            <a href="https://www.linkedin.com/in/prasad-zore-7b8520191/"><FaLinkedin className='bg-blue-900'/></a>
                        </div>
                        <div className='mailIcon bg-red-800 px-3 py-3 rounded-full'>
                            <a href="mailto:prasadzore31@gmail.com"><MdEmail/></a>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
