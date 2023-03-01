import './About.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section id="About">
            <div className="about text-xl flex flex-col gap-11 justify-center ">
                <h1 className="text-7xl text-center">About</h1>
                <div className="bio flex justify-around items-center mt-12 ">
                    <p
                        data-aos="fade-right"
                        className="text-start  max-w-md tracking-widest "
                    >
                        I'm a passionate front end developer with ambition to
                        create great products. Some of my hobbies include gaming
                        and sample based music production. <br /> <br /> My
                        knowledge of SCRUM development cycles comes from my
                        degree in Management Information Systems from the
                        University Of Memphis. <br /> As of Feb 2023, I have
                        completed the Front-End Developer track from the
                        Nashville based Codex Academy boot-camp. <br /> <br /> I
                        look forward to the next step in my journey while
                        continuously growing as a developer.
                    </p>
                    <div className="logo">
                        <img
                            data-aos="fade-left"
                            className="w-72"
                            src="../../src/assets/Avatar.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
