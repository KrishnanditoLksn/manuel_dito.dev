import NavButton from "./NavButton"
import Navlist from "./Navlist"

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
            <div
                className=" rtl: space-x-reverse max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='mr-100'>
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Flowbite</span>
                    </a>
                </div>
                <NavButton></NavButton>
                <Navlist></Navlist>
            </div>
        </nav>
    )
}


export default Navbar