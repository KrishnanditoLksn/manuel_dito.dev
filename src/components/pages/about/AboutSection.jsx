const AboutDescription = () => {
    return (
        <div id="about"
             className="bg-white dark:bg-white gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-52 mb-52">
            <div>
                <div className="font-light text-black text-2xl sm:text-lg dark:text-gray-400 mb-8">
                    <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-black dark:text-black">
                        Hi,Emmanuel Dito is here
                    </h2>
                    <p className="mb-4 dark:text-black  title-font sm:text-4xl text-2xl font-semibold text-black ">
                        Mobile Enthusiast;
                    </p>
                    <p className="mb-2  text-xl leading-relaxed  text-black">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hello everyone,I'm Dito from Universitas Sanata Dharma.Nice to meet you guys.I always
                        trust that the best way to learn is by doing, so I always try to make a project to improve
                        my skills. So far counted from 2024, I have been a Yoasobi fans and I am very interested in
                        Mobile Development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutDescription