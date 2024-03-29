import AboutButton from "./AboutButton"

const AboutDescription = () => {
    return (
        <div className=" mx-auto flex px-14 py-20 md:flex-row flex-col items-center">
            <div className ="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white  ">
                    Hi,Emmanuel Dito is here
                </h1>
                <br className="hidden lg:inline-block" />
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white  ">
                    Passion in Android Development
                </h1>
                <p className="mb-2  leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam maiores error quos aliquid nostrum architecto ratione nesciunt cupiditate, excepturi voluptatibus! Cupiditate obcaecati in quisquam corporis sed placeat rem, sapiente magnam commodi dolorum maiores vel vero tempore. Reiciendis, cumque temporibus? Et, sunt! Accusamus, quam quas a similique repellendus magni dicta. Magni id, accusantium itaque nesciunt officia minima ullam quas quisquam ut, quasi illum explicabo veniam eos molestias repudiandae blanditiis libero in tempore laboriosam maiores vel mollitia? Ipsam quod aliquam possimus magnam pariatur, dolores magni perferendis tenetur dolorem adipisci
                    quo totam provident eius nihil fugit vitae! Quaerat placeat a provident facilis quam.
                </p>
                <br className="hidden lg:inline-block"></br>
                <AboutButton></AboutButton>
            </div>
        </div>
    )
}

export default AboutDescription