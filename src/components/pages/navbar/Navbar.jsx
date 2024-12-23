import Navlist from "./Navlist"

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200  dark:bg-white relative">
            <div
                className=" rtl: space-x-reverse max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='mr-100'></div>
                <Navlist></Navlist>
            </div>
        </nav>
    )
}


export default Navbar