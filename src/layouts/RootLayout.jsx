import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function RootLayout() {
    return (
        <div className="grid grid-cols-[min-content_auto] relative bg-neutral-900 ">
            <Navbar />
            <main className="">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
