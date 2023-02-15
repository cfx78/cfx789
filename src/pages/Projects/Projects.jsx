import React from 'react'
import { motion as m } from 'framer-motion'
const Projects = () => {
    return (
        <m.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="min-w-full h-full bg-info-500 "
        >
            Projects
        </m.div>
    )
}

export default Projects
