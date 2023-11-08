
const AuthorSpotlight = () => {
    return (
        <div>
            <section className="text-gray-600 body-font dark:text-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20 dark:text-white">
                        <h1 className="sm:text-3xl text-2xl dark:text-white font-medium title-font text-gray-900 mb-4">Author Spotlight</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Author Spotlights serve as a promotional tool for authors, helping them reach a broader audience and connect with their readers on a more personal level. For readers, these spotlights provide a convenient way to learn more about their favorite authors and discover new authors whose work they might enjoy.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg--500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                
                                    <img  className="rounded-full" src="https://d28hgpri8am2if.cloudfront.net/author_images/7000/will-durant-419643.jpg" alt="" />
                                    {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                                
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Will Durant</h2>
                                <p className="leading-relaxed text-base">William James Durant ( November 5, 1885 - November 7, 1981) was an American historian and philosopher, best known for his 11-volume work, The Story of Civilization, which contains and details the history of Eastern and Western civilizations.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img className="rounded-full" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgw5Bkeg0GfMalEsOdu85wwnIaGZsTxR0TS_XH6G80ArYrSs8X" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Jared Diamond</h2>
                                <p className="leading-relaxed text-base">Diamond was born on September 10, 1937, in Boston, Massachusetts. Both of his parents were Ashkenazi Jewish. His father, Louis Diamond, was a physician who emigrated from Chișinău in present-day Moldova, then known as Bessarabia.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img className="rounded-full" src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzBgZdh_2fW0eoYnoSdEyvzorBzCEOjozBDGeuBwSMGABnGZmQ5m6Zk2I9ivqTjfdMRK2TOw" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">khaled hosseini</h2>
                                <p className="leading-relaxed text-base">Khaled Hosseini (was born March 4, 1965) is an Afghan-American novelist, UNHCR goodwill ambassador, and former physician.[1][2] His debut novel The Kite Runner (2003) was a critical and commercial success; the book.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">See More</button>
                </div>
            </section>
        </div>
    );
};

export default AuthorSpotlight;