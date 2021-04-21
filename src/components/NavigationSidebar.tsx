
const href = [
    '#home',
    '#interests',
    '#certificate',
    '#projects'
]

export const NavigationSidebar = (props:any) => {
    return (
        <div className='w-full h-full'>
            <li><a href="#home">{props.currentPage}</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#certificate">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>

            {href.map((value, index) => (
                <li><div className='dot bg-white'></div></li>
            ))}
            <div className="dot bg-white">sdf</div>
        </div>
    )
}