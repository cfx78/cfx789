import React from 'react'

const Project = (props) => {
    return (
        <div>
            {' '}
            <h4
                data-aos="fade-in"
                className="text-4xl mb-20 text-center underline underline-offset-2 decoration-[#fffcff]"
            >
                {props.siteTitle}
            </h4>
            <div
                className={`flex ${props.flexDirection}  justify-between sm:gap-x-12 items-center mb-12 sm:mb-28`}
            >
                <div
                    className="flex flex-col justify-center items-center"
                    data-aos={props.imgFadeDirection}
                >
                    <img
                        className="w-72"
                        src={props.siteImg}
                        alt="app screenshot"
                    />
                    <a
                        className="text-center border rounded-md p-2 hover:bg-slate-400 cursor-pointer"
                        href={props.siteHref}
                        target="_blank"
                    >
                        Try It Out Here!
                    </a>
                </div>
                <div
                    data-aos={props.pFadeDirection}
                    className=" w-80 sm:w-96 text-sm sm:text-lg"
                >
                    {props.siteDescription}
                </div>
            </div>
        </div>
    )
}

export default Project
