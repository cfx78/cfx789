import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section
            className="flex flex-col justify-center justify-items-center"
            id="Contact"
        >
            <h1 className=" text-7xl text-center pb-24 mx-auto">Contact</h1>
            <h4 className="text-2xl text-center mx-auto mb-8">
                Feel free to drop me a line
                <br />
                <p className="text-center text-5xl text-white">&#65516;</p>
            </h4>
            <hr />
            <div className="mt-12 contact-container flex justify-around w-full">
                <form
                    data-aos="flip-down"
                    className="pb-7 flex flex-col"
                    action=""
                >
                    <div className="inputs-container grid grid-cols-2 mt-12">
                        <div>
                            <div className="name-input grid grid-cols-1 gap-1 ">
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
                        </div>
                        <div>
                            <div className="message-input  grid grid-cols-1 ">
                                <label
                                    className="block underline underline-offset-2 decoration-[#06bcc1]"
                                    htmlFor="message"
                                >
                                    Your Message
                                    <br />
                                    <br />
                                </label>
                                <textarea
                                    className=" form-input text-[#fffcff;] rounded-sm bg-transparent border-b-2 focus:border-b-0 border-0 focus:ring-[#fffcff] focus:ring-2 w-72 h-44"
                                    type="text-area"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button class="mt-11 h-12 w-full px-6 text-[#fffcff] transition-colors duration-150 border border-[#fffcff] rounded-lg focus:shadow-outline hover:bg-[#06bcc1] hover:text-[#0c0e11]">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
