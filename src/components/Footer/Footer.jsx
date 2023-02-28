import './Footer.scss'

const Footer = () => {
    return (
        <footer className="w-full">
            <div className=" flex ml-20 max-w-96 mx-auto justify-evenly">
                <a href="">
                    <i className="w-28 h-28 fa-brands fa-3x fa-github"></i>
                </a>
                <a href="">
                    <i className="w-28 h-28 fa-brands fa-3x fa-linkedin"></i>
                </a>
                <a className="" href="">
                    <i class="w-28 h-28 fa-brands fa-3x fa-slack"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
