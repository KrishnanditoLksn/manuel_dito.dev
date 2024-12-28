import {Link} from "react-scroll";
// eslint-disable-next-line react/prop-types
export default function NavigationList({divClassName, navClassName, hrefClassName}) {
    return (
        <nav className={navClassName}>
            <div className={divClassName}>
                <a href="/about" className={hrefClassName}>
                    <Link to="about"
                          smooth="true"
                    >About</Link>
                </a>
                <a href="/projects" className={hrefClassName}>
                    <Link to="/projects"
                          smooth="true"
                    >Projects</Link>
                </a>

                <a href="/resume" className={hrefClassName}>
                    <Link to="/resume"
                          smooth="true">
                        Resume
                    </Link>
                </a>
            </div>
        </nav>
    )
}