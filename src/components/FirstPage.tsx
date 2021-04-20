import './FirstPage.css';
import MyPhoto from '../assets/images/prasad.jpg';

export const FirstPage = (props:any) => {
    return (
        <div className="FirstPage flex justify-center items-center flex-col text-center my-2">
            <div className="mainFrame flex justify-center items-center flex-col px-5 py-10">
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
        </div>
    )
}