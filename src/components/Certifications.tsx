import './Certifications.css'
import VisibilitySensor from "react-visibility-sensor";
import pfe from '../assets/images/certificates/pfe.png';
import dfe from '../assets/images/certificates/dfe.png';
import p3p from '../assets/images/certificates/p3p.png';
import sid from '../assets/images/certificates/sid.png';
import gis from '../assets/images/certificates/gis.png';

export const Certifications = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(3);
        }
    }
    return (

        <div className="Certifications flex flex-col justify-center items-center viewport-block py-2" id='certificate'>
            <VisibilitySensor onChange={onChange}>
            <div className="certificationsBox flex flex-col justify-center items-center max-h-full max-w-full my-3">
                <div>
                    <div className="text-3xl">
                        Coursera
                    </div>
                    <div className="courses">
                        <div>
                            Google IT Specialization
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5VUJUTG74R2B">--</a>
                        </div>
                        <div>
                            Swift 5 IOS Development Specialization
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/TD3JXKZUCVPL">--</a>
                        </div>
                        <div>
                            Python For Everybody Specialization
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/8SXL9HJSSHHE">--</a>
                        </div>
                        <div>
                            Python 3 Specialization
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/BZCRXL2932KJ">--</a>
                        </div>
                        <div>
                            Django For Everybody Specialization
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/WGKJT6WC8745">--</a>
                        </div>
                    </div>
                </div>

                <div className='certificateImage flex flex-col items-center justify-center flex-wrap overflow-x-scroll overflow-y-hidden my-3 px-1 py-1 h-3/5'>
                    <div className='px-0 py-0 mx-0'>
                        <img src={gis} className='mx-0 my-0'/>
                    </div>
                    <div className='px-0 py-0 mx-0'>
                        <img src={sid} className='mx-0 my-0'/>
                    </div>
                    <div className='px-0 py-0 mx-0'>
                        <img src={pfe} className='mx-0 my-0'/>
                    </div>
                    <div>
                        <img src={p3p} className='mx-0 my-0'/>
                    </div>
                    <div>
                        <img src={dfe} className='mx-0 my-0'/>
                    </div>
                </div>

            </div>
            </VisibilitySensor>
        </div>

    )

    function isInViewport(element:any) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}