import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'
import RootLayout from '../../layouts/RootLayout'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'
import Links from '../../pages/Links/Links'
import { AnimatePresence } from 'framer-motion'
import Projects from '../../pages/Projects/Projects'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes>
                <Route
                    location={location}
                    key={location.pathname}
                    path="/"
                    element={<RootLayout />}
                >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="links" element={<Links />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
