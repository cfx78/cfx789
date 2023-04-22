import './Footer.scss'

const Footer = () => {
    return (
        <footer className="w-full">
            <div className=" flex ml-20 max-w-96 mx-auto justify-evenly">
                <a href="https://github.com/cfx78" target="_blank">
                    <i className="w-28 h-28 fa-brands fa-3x fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/cortez-foxx-683460a4/"
                    target="_blank"
                >
                    <i className="w-28 h-28 fa-brands fa-3x fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
