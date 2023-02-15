import React from 'react'
import { motion as m } from 'framer-motion'
const Projects = () => {
    return (
        <m.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: 'backInOut' }}
            exit={{ x: '100%' }}
            className="min-w-full h-full bg-info-500 "
        >
            Projects
        </m.div>
    )
}

export default Projects
