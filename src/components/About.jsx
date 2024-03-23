const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white  ">
                        Hi,Emmanuel Dito is here
                    </h1>
                    <br className="hidden lg:inline-block"/>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white  ">
                        Passion in Android Development
                    </h1>
                    <p className="mb-2  leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <br className="hidden lg:inline-block"></br>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Test
                        </button>

                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-40">
                            Test2
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default About