import React from 'react'
import { motion as m } from 'framer-motion'
const About = () => {
    return (
        <m.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: 'backInOut' }}
            exit={{ x: '100%' }}
            className="min-w-full h-full bg-success-700 absolute top-0 left-0"
        >
            About
        </m.div>
    )
}

export default About
