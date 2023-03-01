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
            className="flex justify-start items-center mt-11 home "
            id="Home"
        >
            <div
                data-aos="fade-right"
                className="max-w-max mt-1 p-1 ml-11 flex flex-col gap-1 intro"
            >
                <h1 className="text-7xl text-start">
                    Hi, I'm <span className="name">Cortez Foxx</span> <br />
                </h1>
                <br />
                <h2 className="text-4xl text-end underline underline-offset-4 decoration-[#06bcc1]">
                    Front-End Developer
                </h2>
            </div>
        </section>
    )
}

export default Home
