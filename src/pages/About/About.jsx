import React from 'react'
import { motion as m } from 'framer-motion'
const About = () => {
    return (
        <m.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="min-w-full h-full bg-success-700 absolute top-0 left-0"
        >
            About
        </m.div>
    )
}

export default About
