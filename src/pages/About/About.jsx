import './About.scss'
const About = () => {
    return (
        <section id="About">
            {' '}
            <div className="bio text-xl ml-10 flex flex-col justify-end gap-11  ">
                <h1 className="text-7xl text-center">About</h1>
                <p className="text-start max-w-md mt-28">
                    I'm a passionate front end developer with ambition to create
                    great products. Some of my hobbies include gaming and sample
                    based music production My knowledge of SCRUM development
                    cycles comes from my degree in Management Information
                    Systems from the University Of Memphis. As of Feb 2023, I
                    have completed the Front-End Developer track from the
                    Nashville based Codex Academy boot-camp.
                </p>

                <div className="about flex justify-end align-middle gap-20">
                    <div className="skills">
                        <h1 className="text-center text-4xl pb-7">
                            Technologies
                        </h1>
                        <ul className="grid justify-center grid-cols-4 align-middle mx-auto gap-4">
                            <li>
                                <img src="src\icons\api.svg" alt="api" />
                            </li>
                            <li>
                                <img
                                    src="src\icons\bootstrap.svg"
                                    alt="bootstrap"
                                />
                            </li>
                            <li>
                                <img src="src\icons\css.svg" alt="css" />
                            </li>
                            <li>
                                <img
                                    src="src\icons\firebase.svg"
                                    alt="firebase"
                                />
                            </li>
                            <li>
                                <img src="src\icons\git.svg" alt="git" />
                            </li>
                            <li>
                                <img src="src\icons\heroku.svg" alt="heroku" />
                            </li>
                            <li>
                                <img src="src\icons\html.svg" alt="html" />
                            </li>
                            <li>
                                <img
                                    src="src\icons\javascript.svg"
                                    alt="javascript"
                                />
                            </li>
                            <li>
                                <img src="src\icons\node.svg" alt="node" />
                            </li>
                            <li>
                                <img src="src\icons\npm.svg" alt="npm" />
                            </li>
                            <li>
                                <img src="src\icons\react.svg" alt="react" />
                            </li>
                            <li>
                                <img src="src\icons\sass.svg" alt="sass" />
                            </li>
                            <li>
                                <img
                                    src="src\icons\tailwind.svg"
                                    alt="tailwind"
                                />
                            </li>
                            <li>
                                <img src="src\icons\vite.svg" alt="vite" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
