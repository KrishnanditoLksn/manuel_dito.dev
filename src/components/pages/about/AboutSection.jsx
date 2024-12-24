const AboutDescription = () => {
    function swipeDown() {
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    }

    return (
        <div className=" mx-auto flex px-14 py-20 md:flex-row flex-col items-center bg-white">
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black  ">
                    Hi,Emmanuel Dito is here
                </h1>
                <br className="hidden lg:inline-block"/>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black  ">
                    Mobile Native Enthusiast;
                </h1>
                <p className="mb-2  text-2xl leading-relaxed text-black">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hello everyone,I'm Dito from Universitas Sanata Dharma.Nice to meet you guys.
                    I always trust that the best way to learn is by doing, so I always try to make a project to improve
                    my skills.
                    So far counted from 2024, I have been a Yoasobi fans and I am very interested in Mobile Development.
                </p>
                <br className="hidden lg:inline-block"></br>
                <button onClick={swipeDown}
                        className="mt-80 ml-[645px] mr-80 text-center text-black font-bold text-2xl">
                    Swipe Down Here 👇
                </button>
            </div>
        </div>
    )
}

export default AboutDescription