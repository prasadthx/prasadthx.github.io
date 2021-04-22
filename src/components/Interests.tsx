import './Interests.css'
import VisibilitySensor from "react-visibility-sensor";

export const Interests = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(2);
        }
    }
    return (
        <div className="Interests flex flex-col justify-evenly items-center text-center viewport-block" id='interests'>

            <div className="text-2xl text-center">
                Interests And Skills
            </div>
            <VisibilitySensor onChange={onChange}>
            <div className="skills flex flex-col justify-evenly overflow-y-scroll py-6 my-6">

                <div className="flex justify-evenly flex-wrap my-4">
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
                </div>
                <div className='mobile'>
                    <div className='languages flex flex-col flex-wrap'>
                        <div className='text-2xl my-7'> Mobile Technologies </div>
                        <div className='flex flex-wrap justify-center items-center'>
                            <div className='mx-4 my-4'>Native Android Development (Java)</div>
                            <div className='mx-4 my-4'>Native IOS Development (Swift)</div>
                            <div className='mx-4 my-4'>Cross Platform : React Native</div>
                        </div>
                    </div>
                </div>

            <div className='other'>
                <div className='languages flex flex-col'>
                    <div className='text-2xl my-7'> Other Technologies </div>
                    <div className='flex flex-wrap justify-center items-center'>
                        <div className='mx-4 my-4'>Pursuing Data Science, ML and Deep Learning</div>
                        <div className='mx-4 my-4'>LLVM Compiler Tools</div>
                    </div>
                </div>
            </div>
            </div>
            </VisibilitySensor>
        </div>

    )
}