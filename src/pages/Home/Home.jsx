import './Home.scss'

function Home() {
    return (
        <section className="grid " id="Home">
            <div className="max-w-max mt-24 p-4 ml-3 flex flex-col gap-2 intro">
                <h1 className="text-8xl text-start">
                    Hi, I'm <span className="name">Cortez Foxx</span> <br />
                </h1>
                <br />
                <h2 className="text-4xl text-end underline underline-offset-4 decoration-[#06bcc1]">
                    Front-End Developer
                </h2>
            </div>

            <div className="logo row-end-3 col-end-10 mr-36 ">
                <img className="w-80" src="../../src/assets/Avatar.svg" />
            </div>
        </section>
    )
}

export default Home
