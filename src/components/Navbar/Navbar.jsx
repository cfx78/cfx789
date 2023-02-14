import {
    HomeIcon,
    InformationCircleIcon,
    FolderIcon,
    LinkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="h-screen col-span-1  border-4 border-blue-700/70  flex flex-col  inset-y-0 left-0 justify-around items-center rounded  text-blue-700/60 border-y-8 border-y-blue-800/40">
            <NavLink className="hover:text-blue-400">
                <HomeIcon className="h-14 w-14  " />
                <p className="text-center">Home</p>
            </NavLink>
            <NavLink className="hover:text-blue-400">
                <InformationCircleIcon className="h-14 w-14" />
                <p className="text-center z-10">About</p>
            </NavLink>
            <NavLink className="hover:text-blue-400">
                <FolderIcon className="h-14 w-14" />
                <p className="text-center z-10">Projects</p>
            </NavLink>
            <NavLink className="hover:text-blue-400">
                <LinkIcon className="h-14 w-14" />
                <p className="text-center z-10">Links</p>
            </NavLink>
        </div>
    )
}

export default Navbar
