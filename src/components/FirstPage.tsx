import './FirstPage.css';
import MyPhoto from '../assets/images/prasad.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

export const FirstPage = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(1);
        }
    }
    return (

        <div className="FirstPage flex justify-center items-center flex-col text-center my-2 viewport-block" id='home'>
            <div className="mainFrame flex justify-center items-center flex-col px-5 py-10 mt-16">
                <div className="flex justify-center">
                    <img src={MyPhoto} alt=""
                         className="rounded-full mx-auto absolute -top-28 w-48 h-48 shadow-2xl border-2 border-black"/>
                </div>
                <div className="text-5xl mb-4 mt-20">
                    Hello I am Prasad Zore
                </div>
                <VisibilitySensor onChange={onChange}>
                <div className="text-xl mt-2">
                    I am a Tech Enthusiast and a Lifelong tech learner
                </div>
                </VisibilitySensor>
            </div>
            <div className="flex justify-evenly items-center w-2/5 h-1/5 text-3xl">
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
            </div>
        </div>

    )
}