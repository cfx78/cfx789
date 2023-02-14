import {
    HomeIcon,
    InformationCircleIcon,
    FolderIcon,
    LinkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="h-screen col-span-1  border-4 border-accent-700/50  flex flex-col  inset-y-0 left-0 justify-around items-center rounded  text-secondary-700 border-y-8 border-y-accent-700/20 hover:border-primary-200 transition duration-150 ease-out hover:ease-in">
            <NavLink className="transition duration-150 ease-out hover:ease-in hover:text-primary-50">
                <HomeIcon className="h-14 w-14  " />
                <p className="text-center">Home</p>
            </NavLink>
            <NavLink className="transition duration-150 ease-out hover:ease-in hover:text-primary-50">
                <InformationCircleIcon className="h-14 w-14" />
                <p className="text-center z-10">About</p>
            </NavLink>
            <NavLink className="transition duration-150 ease-out hover:ease-in hover:text-primary-50">
                <FolderIcon className="h-14 w-14" />
                <p className="text-center z-10">Projects</p>
            </NavLink>
            <NavLink className="transition duration-150 ease-out hover:ease-in hover:text-primary-50">
                <LinkIcon className="h-14 w-14" />
                <p className="text-center z-10">Links</p>
            </NavLink>
        </div>
    )
}

export default Navbar
