import './Interests.css'
import VisibilitySensor from "react-visibility-sensor";
import {ReactComponent as CLogo} from '../assets/images/icons/logos/c-language.svg';
import {ReactComponent as CPLogo} from '../assets/images/icons/logos/c++-language.svg';
import {ReactComponent as RustLogo} from '../assets/images/icons/logos/rust-language.svg';
import {ReactComponent as RubyLogo} from '../assets/images/icons/logos/ruby-language.svg'
import {ReactComponent as PythonLogo} from '../assets/images/icons/logos/python-language.svg';
import {ReactComponent as JavaScriptLogo} from '../assets/images/icons/logos/javascript.svg';
import {ReactComponent as TypeScriptLogo} from '../assets/images/icons/logos/typescript-language.svg';
import {ReactComponent as JavaLogo} from '../assets/images/icons/logos/java.svg';
import {ReactComponent as RailsLogo} from '../assets/images/icons/logos/rails.svg';
import {ReactComponent as DjangoLogo} from '../assets/images/icons/logos/django.svg';
import {ReactComponent as NodeLogo} from '../assets/images/icons/logos/nodejs.svg';
import {ReactComponent as AngularLogo} from '../assets/images/icons/logos/angular.svg';
import {ReactComponent as ReactJSLogo} from '../assets/images/icons/logos/react.svg';
import {ReactComponent as ReactNativeLogo} from '../assets/images/icons/logos/react-native.svg';
import {ReactComponent as ExpressLogo} from '../assets/images/icons/logos/express-js.svg';
import {ReactComponent as AndroidLogo} from '../assets/images/icons/logos/android.svg';
import {ReactComponent as ArchLinuxLogo} from '../assets/images/icons/logos/arch-linux.svg'
import {ReactComponent as MongoDBLogo} from '../assets/images/icons/logos/mongodb.svg'
import {Slide} from "react-awesome-reveal";



export const Interests = (props:any) => {
    const { setPage } = props;
    const onChange = (isVisible:any) => {
        if (isVisible) {
            setPage(2);
        }
    }
    return (
        <div className={"w-full h-full relative"}>
            <VisibilitySensor onChange={onChange}>
                <div className={"absolute right-1/2 top-1/2 z-0"}>
                    Hello World
                </div>
            </VisibilitySensor>
            <div className="Interests h-full flex flex-col justify-between items-center overflow-y-scroll py-3 relative" id='interests'>
                <div className={"flex justify-center items-stretch w-full flex-wrap z-1"}>
                    <Slide direction={"left"}>
                        <div className={"flex justify-center items-stretch flex-wrap"}>
                            <div><CLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><CPLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><PythonLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><JavaScriptLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><TypeScriptLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><RubyLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><JavaLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><RustLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                        </div>
                    </Slide>
                </div>
                <div className={"flex justify-evenly items-stretch w-5/6 flex-wrap z-1"}>
                    <Slide direction={"right"}>
                        <div className={"flex justify-center items-stretch flex-wrap"}>
                            <div><ReactJSLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><AngularLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><NodeLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><RailsLogo height={"60%"} width={"60%"} className={"block m-auto skills"}/></div>
                            <div><ExpressLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><MongoDBLogo height={"60%"} width={"60%"} className={"block m-auto skills"}/></div>
                            <div><DjangoLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                        </div>
                    </Slide>
                </div>
                <div className={"flex justify-evenly items-stretch w-5/6 flex-wrap z-1"}>
                    <Slide direction={"left"}>
                        <div className={"flex justify-center items-stretch flex-wrap"}>
                            <div><AndroidLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><ArchLinuxLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                            <div><ReactNativeLogo height={"50%"} width={"50%"} className={"block m-auto skills"}/></div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
