import projectList from "../../data/ProjectsData.jsx";

export default function ProjectContent() {
    return (
        <section id="projects" className="bg-white">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mr-42">
                <div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                            My Projects</h2>
                    </div>

                    <div className="font-black text-black">
                        <h2 className="text-2xl font-sans font-semibold ">Discover all of my projects </h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mx-auto max-w-screen-xl mb-20">
                {projectList().map((project) => (
                    <div
                        key={project.keyList}
                        className="bg-white max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                    >
                        <a href={project.link} aria-current={true}>
                            <img
                                className="w-full h-48 object-cover"
                                src={project.image}
                                alt={project.subtitle}
                            />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-base">
                                {project.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {project.category}
                </span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}