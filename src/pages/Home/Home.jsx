import './Home.scss'

function Home() {
    const skills = []
    return (
        <section className="grid home mt-24" id="Home">
            <div className="max-w-max mt-1 p-2 ml-3 flex flex-col gap-1 intro">
                <h1 className="text-7xl text-start">
                    Hi, I'm <span className="name">Cortez Foxx</span> <br />
                </h1>
                <br />
                <h2 className="text-4xl text-end underline underline-offset-4 decoration-[#06bcc1]">
                    Front-End Developer
                </h2>
            </div>

            <div className="logo row-end-3 col-end-3 m-auto pl-20 pb-48">
                <img className="w-80" src="../../src/assets/Avatar.svg" />
            </div>
        </section>
    )
}

export default Home
