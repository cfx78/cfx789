import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function RootLayout() {
    return (
        <div className="grid grid-cols-12 relative bg-black/90 ">
            <Navbar />
            <main className="col-span-11">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
