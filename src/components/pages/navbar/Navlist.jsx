import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import NavigationList from "../../ui/navigation/NavigationList.jsx";

const Navlist = () => {
    const [isOpen, setIsOpen] = useState(false)
    const showNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-15">
                <div className="text-[24px] text-black font-bold font-mono">Dits Dev</div>
                <NavigationList divClassName={"ml-96 flex space-x-4 text-gray-900"}
                                navClassName={"sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50"}
                                hrefClassName={"text-black font-medium"}
                ></NavigationList>
            </div>


            {isOpen ? (
                <button
                    className="fixed right-[30px] fa fa-times text-3xl z-50 md:hidden"
                    aria-hidden="true" onClick={showNav}>
                    <AiOutlineClose></AiOutlineClose>
                </button>
            ) : (
                <button className="text-3xl md:hidden ml-[350px]" onClick={showNav} aria-hidden="true">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </button>
            )}

            <NavigationList
                navClassName={`h-[20vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${
                    isOpen ? "right-[0px]" : "right-[-100vw]"
                } `}
                divClassName={"flex flex-col justify-around items-center gap-[30px] "}
                hrefClassName={"text-black"}
            >
            </NavigationList>
        </div>
    )
}

export default Navlist