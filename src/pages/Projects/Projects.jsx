import Aos from 'aos'
import 'aos/dist/aos.css'
import backlog from '../../assets/backlog.png'
import rmgLogo from '../../assets/RMG.png'
import { useEffect } from 'react'
import Project from './Project'
import Backlog from './Site Descriptions/Backlog'
import RMG from './Site Descriptions/RMG'
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section className="grid place-content-center" id="Projects">
            <h1 className="text-7xl text-center sm:mb-28">Projects</h1>
            <br />

            <Project
                siteTitle="Backlog"
                imgFadeDirection="fade-right"
                pFadeDirection="fade-left"
                flexDirection="flex-row"
                siteHref="https://backlog-661fc.web.app/"
                siteImg={backlog}
                siteDescription={<Backlog />}
            />
            <Project
                siteTitle="Real Muziq Group"
                imgFadeDirection="fade-left"
                pFadeDirection="fade-right"
                flexDirection="flex-row-reverse"
                siteHref="https://rmg-test.netlify.app/"
                siteImg={rmgLogo}
                siteDescription={<RMG />}
            />
        </section>
    )
}

export default Projects
