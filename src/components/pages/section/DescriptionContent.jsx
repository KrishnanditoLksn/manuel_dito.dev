import {swipeDown} from "../../../helper/ScrollDown.js";

const DescriptionContent = () => {
    return (
        <section className="bg-white dark:bg-white">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-72 mr-44">
                <div>
                    <div className="font-light text-black sm:text-lg dark:text-gray-400 mb-80">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  light:text-white  dark:text-black">Short
                            Introduction again :) </h2>
                        <p className="mb-4 dark:text-black font-normal">Majoring Informatics with System Development as
                            my concentration</p>
                        <p className="mb-4 dark:text-black font-normal">As Informatics student,I have a curiosity in
                            cryptography algorithms
                            and mobile development.hope someday I can mix them together xD </p>
                    </div>
                </div>
                <div>
                    <div className="space-x-40 ml-72">
                        <div className="rtl:grid grid-cols-2 gap-4 mb-72 space-x-10">
                            <img className="w-120 h-120 rounded-lg"
                                 src="https://github.com/user-attachments/assets/6ba2e32a-8688-4e2b-be46-a225408358e5"
                                 alt="dito image"></img>
                        </div>
                    </div>
                </div>
                <button onClick={swipeDown} className="text-black text-2xl mr-80 ml-[645px] font-mono">My projects</button>
            </div>
        </section>
    )
}

export default DescriptionContent