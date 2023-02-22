import './Navbar.scss'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full h-1/6 ">
            <nav className="flex flex-row justify-end align-middle p-3 ">
                <div className="links flex flex-row justify-evenly align-middle gap-6 text-3xl mr-24 ">
                    <a className=" active:text-[#06bcc1]" href="#Home">
                        Home
                    </a>
                    <a className=" active:text-[#06bcc1]" href="#About">
                        About
                    </a>
                    <a className=" active:text-[#06bcc1]" href="#Projects">
                        Projects
                    </a>
                    <a className=" active:text-[#06bcc1]" href="#Links">
                        Links
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
