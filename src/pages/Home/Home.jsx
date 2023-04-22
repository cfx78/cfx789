import './Home.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section
            className="sm:flex justify-start items-center ,lg:mt-11 md:h-fit home mt-32 md:mt-0"
            id="Home"
        >
            <div
                data-aos="fade-right"
                className="sm:max-w-max sm:mt-1 sm:p-1 sm:ml-11 flex flex-col gap-1 intro"
            >
                <h1 className="text-7xl text-center sm:text-start">
                    Hi, I'm <span className="name">Cortez Foxx</span> <br />
                </h1>
                <br />
                <h2 className="text-4xl text-center mt-5  sm:text-end underline underline-offset-4 decoration-[#06bcc1]">
                    React Developer
                </h2>
            </div>
        </section>
    )
}

export default Home
