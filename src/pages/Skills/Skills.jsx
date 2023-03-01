import './Skills.scss'
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
                            <img src="src\icons\vite.svg" alt="vite" />
                        </li>

                        <li>
                            <img src="src\icons\firebase.svg" alt="firebase" />
                        </li>
                        <li>
                            <img src="src\icons\git.svg" alt="git" />
                        </li>
                        <li>
                            <img src="src\icons\node.svg" alt="node" />
                        </li>
                        <li>
                            <img src="src\icons\npm.svg" alt="npm" />
                        </li>
                        <li>
                            <img src="src\icons\heroku.svg" alt="heroku" />
                        </li>
                        <li>
                            <img src="src\icons\css.svg" alt="css" />
                        </li>
                        <li>
                            <img
                                src="src\icons\bootstrap.svg"
                                alt="bootstrap"
                            />
                        </li>
                        <li>
                            <img
                                src="src\icons\javascript.svg"
                                alt="javascript"
                            />
                        </li>
                        <li>
                            <img src="src\icons\html.svg" alt="html" />
                        </li>
                        <li>
                            <img src="src\icons\react.svg" alt="react" />
                        </li>
                        <li>
                            <img src="src\icons\tailwind.svg" alt="tailwind" />
                        </li>
                        <li>
                            <img src="src\icons\sass.svg" alt="sass" />
                        </li>
                        <li>
                            <img src="src\icons\api.svg" alt="api" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
