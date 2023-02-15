import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function RootLayout() {
    return (
        <div className="grid grid-cols-[min-content_auto]  bg-neutral-900 ">
            <Navbar />
            <main className=" relative">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
