const Contact = () => {
    return (
        <section
            className="flex flex-col  items-center justify-center"
            id="Contact"
        >
            <h1 className=" text-7xl text-center pb-24">Contact</h1>
            <div className="contact-container flex justify-around w-full">
                <form className="flex flex-col" action="">
                    <h4>Feel free to drop me a line</h4>
                    <div className="name-input grid grid-cols-1 gap-6 ">
                        <label
                            className="block underline underline-offset-2 decoration-[#06bcc1]"
                            htmlFor="name"
                        >
                            Your Name
                            <br />
                            <br />
                            <input
                                className="form-input text-[#fffcff;] rounded-sm bg-transparent border-b-2 focus:border-b-0 border-0 focus:ring-[#fffcff] focus:ring-2  "
                                type="text"
                                name="name"
                                id="name"
                            />
                        </label>
                    </div>
                    <div className="email-input grid grid-cols-1 gap-6 mt-24">
                        <label
                            className="block underline underline-offset-2 decoration-[#06bcc1]"
                            htmlFor="email"
                        >
                            Your Email
                            <br />
                            <br />
                            <input
                                className="form-input text-[#fffcff;] rounded-sm bg-transparent border-b-2 focus:border-b-0 border-0 focus:ring-[#fffcff] focus:ring-2  "
                                type="email"
                                name="email"
                                id="email"
                            />
                        </label>
                    </div>
                    <div className="message-input grid grid-cols-1 gap-6 mt-24">
                        <label
                            className="block underline underline-offset-2 decoration-[#06bcc1]"
                            htmlFor="message"
                        >
                            Your Message
                            <br />
                            <br />
                        </label>
                        <textarea
                            className="form-input text-[#fffcff;] rounded-sm bg-transparent border-b-2 focus:border-b-0 border-0 focus:ring-[#fffcff] focus:ring-2 w-72"
                            type="text-area"
                            name="message"
                            id="message"
                        ></textarea>
                    </div>
                </form>
                <div className="links">
                    <h4>Direct Links</h4>
                </div>
            </div>
        </section>
    )
}

export default Contact
