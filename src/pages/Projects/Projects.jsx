import './Projects.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import backlog from '../../assets/backlog.png'
import randomReviews from '../../assets/random-reviews.png'
import cfx789 from '../../assets/cfx789.png'
import { useEffect } from 'react'
import Project from './Project'
import Backlog from './Site Descriptions/Backlog'
import CFX789 from './Site Descriptions/CFX789'
import RandomReviews from './Site Descriptions/RandomReviews'
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section className="grid place-content-center" id="Projects">
            <h1 className="text-7xl pb-11 md:pb-0 text-center sm:mb-28">
                Projects
                <br />
                <small className="text-base">⭐ = latest project</small>
            </h1>

            <Project
                siteTitle="This Very Site!"
                imgFadeDirection="fade-left"
                pFadeDirection="fade-right"
                flexDirection="flex flex-col gap-20 md:gap-10 md:flex-row-reverse"
                siteHref="https://cfx-789.netlify.app/"
                siteImg={cfx789}
                siteDescription={<CFX789 />}
            />
            <Project
                siteTitle="Backlog"
                imgFadeDirection="fade-right"
                pFadeDirection="fade-left"
                flexDirection="flex flex-col gap-20 md:gap-10 md:flex-row"
                siteHref="https://backlog-661fc.web.app/"
                siteImg={backlog}
                siteDescription={<Backlog />}
            />
            <span className="text-center">⭐</span>
            <Project
                siteTitle="Random Reviews"
                imgFadeDirection="fade-left"
                pFadeDirection="fade-right"
                flexDirection="flex flex-col gap-20 md:gap-10 md:flex-row-reverse"
                siteHref="https://random-reviews-blog.vercel.app/"
                siteImg={randomReviews}
                siteDescription={<RandomReviews />}
            />
        </section>
    )
}

export default Projects
