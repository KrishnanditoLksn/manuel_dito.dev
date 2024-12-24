export const FooterContent = () => {
    return (
        <footer className="bg-white dark:bg-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        {/*<a href="https://flowbite.com/" className="flex items-center">*/}
                        {/*    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3"*/}
                        {/*         alt="FlowBite Logo"/>*/}
                        {/*    <span*/}
                        {/*        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>*/}
                        {/*</a>*/}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Reach Me
                                on :</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/KrishnanditoLksn"
                                       className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/emmanuel-krishnandito-laksana-3981b2251/"
                                       className="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              className="hover:underline">Dits Dev™</a>. All Rights Reserved.
          </span>
                </div>
            </div>
        </footer>
    )
}