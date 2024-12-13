const DescriptionContent = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mr-42">
                <div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-80">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dito
                            from Sragen</h2>
                        <p className="mb-4">Non Wibu boy; Yoasobi fans since 2022 </p>
                        <p className="mb-4">Majoring Informatics at Universitas Sanata Dharma with System Development as
                            my concentration</p>
                    </div>
                </div>
                <div>
                    <div className="space-x-40 ml-72">
                        <div className="rtl:grid grid-cols-2 gap-4 mt-8 space-x-10">
                            <img className="w-full rounded-lg"
                                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                                 alt="office content 1"></img>
                            <img className="mt-4 w-full lg:mt-10 rounded-lg"
                                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                                 alt="office content 2"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionContent