import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section className="grid place-content-center" id="Projects">
            <h1 className="text-7xl text-center sm:mb-28">Projects</h1>
            <br />
            <h4
                data-aos="fade-in"
                className="text-4xl mb-20 text-center underline underline-offset-2 decoration-[#fffcff]"
            >
                Backlog
            </h4>
            <div className="flex justify-between sm:gap-x-12 items-center">
                <div
                    className="flex flex-col justify-center items-center"
                    data-aos="fade-right"
                >
                    <img
                        className="w-72"
                        src="../../src/assets/mockuper.png"
                        alt="backlog app"
                    />
                    <a
                        className="text-center border p-2"
                        href="https://backlog-661fc.web.app/"
                        target="_blank"
                    >
                        Try It Out Here!
                    </a>
                </div>
                <p data-aos="fade-left" className=" w-80 sm:w-96 text-sm">
                    An app designed with gamers in mind! Having trouble
                    remembering which game you need to play next? Backlog is
                    here to help!
                    <br />
                    <br />
                    Through an easy to use interface that allows users to search
                    any game, the user can then add the game to their own
                    database.
                    <br />
                    <br />
                    This project was built with React and features log in
                    capabilities, all CRUD actions, as well as the use of
                    backend databases such as Firebase.
                </p>
            </div>
        </section>
    )
}

export default Projects
