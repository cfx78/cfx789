import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { motion as m, AnimatePresence } from 'framer-motion'

function RootLayout() {
    return (
        <m.div className="grid grid-cols-[min-content_auto]">
            <Navbar />
            <AnimatePresence>
                <m.main
                    key="main"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    exit={{ opacity: 1 }}
                    className=" relative"
                >
                    {' '}
                    <Outlet />
                </m.main>
            </AnimatePresence>
        </m.div>
    )
}

export default RootLayout
