import {Link} from "react-scroll";

const Navlist = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-12">
                <div className=" ml-96 flex space-x-4 text-gray-900">
                    <a href="/about">
                        <Link to="/about">About</Link>
                    </a>
                    <a href="/projects">
                        <Link to="/projects">Projects</Link>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navlist