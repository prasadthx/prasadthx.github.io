import './Certifications.css'
import VisibilitySensor from "react-visibility-sensor";

export const Certifications = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(3);
        }
    }
    return (

        <div className="Certifications flex flex-col justify-center items-center viewport-block" id='certificate'>
            <VisibilitySensor onChange={onChange}>
            <div className="certificationsBox flex flex-col justify-center items-center">
                <div className="text-3xl my-4">
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