import {resumeDownloader} from "../../../helper/ResumeDownloader.js";

export default function ContactResumeDescription() {
    return (
        <div id="/resume" className="flex flex-col items-center mt-20 sm:mt-32 lg:mt-40">
            <div className="mb-80 mt-80 w-full max-w-3xl px-4 sm:px-8 lg:px-16">
                <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-6">
                    Hey there, I Have a Resume
                </h1>
                <div className="flex justify-center">
                    <button onClick={resumeDownloader}
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
                        Download here
                    </button>
                </div>
            </div>
        </div>

    )
}