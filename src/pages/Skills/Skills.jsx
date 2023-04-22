import './Skills.scss'
import api from '../../icons/api.svg'
import bootstrap from '../../icons/bootstrap.svg'
import css from '../../icons/css.svg'
import firebase from '../../icons/firebase.svg'
import git from '../../icons/git.svg'
import heroku from '../../icons/heroku.svg'
import html from '../../icons/html.svg'
import javascript from '../../icons/javascript.svg'
import node from '../../icons/node.svg'
import npm from '../../icons/npm.svg'
import react from '../../icons/react.svg'
import sass from '../../icons/sass.svg'
import tailwind from '../../icons/tailwind.svg'
import vite from '../../icons/vite.svg'
import next from '../../icons/next.svg'
import sanity from '../../icons/sanity.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section id="Skills">
            {' '}
            <div className="about w-full h-full flex justify-center  items-center">
                <div className="skills">
                    <h1 className="text-7xl text-center pb-28">Skills</h1>
                    <ul
                        data-aos="fade-up"
                        className="flex justify-center max-w-4xl flex-wrap items-center gap-20"
                    >
                        <li>
                            <img src={vite} alt="vite" />
                        </li>

                        <li>
                            <img src={firebase} alt="firebase" />
                        </li>
                        <li>
                            <img src={git} alt="git" />
                        </li>
                        <li>
                            <img src={node} alt="node" />
                        </li>
                        <li>
                            <img src={npm} alt="npm" />
                        </li>
                        <li>
                            <img src={heroku} alt="heroku" />
                        </li>
                        <li>
                            <img src={css} alt="css" />
                        </li>
                        <li>
                            <img src={bootstrap} alt="bootstrap" />
                        </li>
                        <li>
                            <img src={javascript} alt="javascript" />
                        </li>
                        <li>
                            <img src={html} alt="html" />
                        </li>
                        <li>
                            <img src={react} alt="react" />
                        </li>
                        <li>
                            <img src={tailwind} alt="tailwind" />
                        </li>
                        <li>
                            <img src={sass} alt="sass" />
                        </li>
                        <li>
                            <img src={api} alt="api" />
                        </li>
                        <li>
                            {' '}
                            <img src={next} alt="next" />
                        </li>
                        <li>
                            {' '}
                            <img src={sanity} alt="sanity" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
