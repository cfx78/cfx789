import {
    HomeIcon,
    InformationCircleIcon,
    FolderIcon,
    LinkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="h-screen c border-4 border-accent-700/50  flex flex-col  inset-y-0 left-0 justify-around items-center rounded   border-y-8 border-y-accent-700/20 hover:border-primary-200 transition duration-150 ease-out hover:ease-in max-w-min">
            <NavLink
                to="/"
                className="transition duration-150 ease-out
                text-accent-700/60 hover:ease-in hover:text-primary-50"
            >
                <HomeIcon className="h-14 w-14  " />
                <p className="text-center">Home</p>
            </NavLink>
            <NavLink
                to="about"
                className="transition duration-150 ease-out text-success-700/80 hover:ease-in hover:text-primary-50"
            >
                <InformationCircleIcon className="h-14 w-14" />
                <p className="text-center z-10">About</p>
            </NavLink>
            <NavLink
                to="projects"
                className="transition duration-150 ease-out text-info-500/60 hover:ease-in hover:text-primary-50"
            >
                <FolderIcon className="h-14 w-14" />
                <p className="text-center z-10">Projects</p>
            </NavLink>
            <NavLink
                to="links"
                className="transition duration-150 ease-out text-secondary-700/60 hover:ease-in hover:text-primary-50"
            >
                <LinkIcon className="h-14 w-14" />
                <p className="text-center z-10">Links</p>
            </NavLink>
        </div>
    )
}

export default Navbar
