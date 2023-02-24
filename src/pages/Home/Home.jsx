import './Home.scss'

function Home() {
    const skills = []
    return (
        <section className="grid home" id="Home">
            <div className="max-w-max mt-24 p-2 ml-3 flex flex-col gap-1 intro">
                <h1 className="text-7xl text-start">
                    Hi, I'm <span className="name">Cortez Foxx</span> <br />
                </h1>
                <br />
                <h2 className="text-4xl text-end underline underline-offset-4 decoration-[#06bcc1]">
                    Front-End Developer
                </h2>
            </div>
            <div className="bio text-xl self-start row-start-2 max-w-xl flex flex-col  mx-auto justify-center gap-28  pb-2">
                <p className="self-center mt-28">
                    I'm a passionate front end developer with ambition to create
                    great products. My knowledge of SCRUM development cycles
                    comes from my degree in Management Information Systems from
                    the University Of Memphis. As of Feb 2023, I have completed
                    the Front-End Developer track from the Nashville based Codex
                    Academy boot-camp.
                </p>

                <div className="about pt-9 flex justify-between gap-20">
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
                    <div className="hobbies">
                        <h1 className="text-center text-4xl pb-7">Hobbies</h1>
                        <ul className="ml-12 text-2xl p-5">
                            <li className="mb-5">Gaming</li>
                            <li>Sample-Based Music Production</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="logo row-end-3 col-end-3 m-auto pl-20 pb-48">
                <img className="w-80" src="../../src/assets/Avatar.svg" />
            </div>
        </section>
    )
}

export default Home
