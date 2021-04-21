import './Interests.css'
import VisibilitySensor from "react-visibility-sensor";

export const Interests = (props:any) => {
    const { inViewport, setPage } = props;
    function onChange (isVisible:any) {
        if (isVisible) {
            setPage(2);
        }
    }
    return (
        <VisibilitySensor onChange={onChange}>
        <div className="Interests flex justify-evenly items-center text-center flex-wrap viewport-block" id='interests'>
            {/*<section className="overlay"></section>*/}
            <div className='languages flex flex-col'>
                <div className='text-2xl my-7'> Languages </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>C</div>
                    <div>C++</div>
                    <div>Java</div>
                    <div>Python</div>
                    <div>Julia</div>
                    <div>Swift</div>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                </div>
            </div>
            <div className='technologies'>
                <div className='languages flex flex-col'>
                    <div className='text-2xl my-7'> Web Technologies </div>
                    <div className='grid grid-cols-2  gap-4'>
                        <div>Ruby On Rails</div>
                        <div>Django</div>
                        <div>ExpressJS</div>
                        <div>NestJS</div>
                        <div>ReactJS</div>
                        <div>Angular</div>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <div className='languages flex flex-col'>
                    <div className='text-2xl my-7'> Mobile Technologies </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>Native Android Development (Java)</div>
                        <div>Native IOS Development (Swift)</div>
                        <div>Cross Platform : React Native</div>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <div className='languages flex flex-col'>
                    <div className='text-2xl my-7'> Other Technologies </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>Pursuing Data Science, ML and Deep Learning</div>
                        <div>LLVM Compiler Tools</div>
                    </div>
                </div>
            </div>
        </div>
        </VisibilitySensor>
    )
}