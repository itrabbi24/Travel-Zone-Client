import { Slide } from "react-awesome-reveal";

const WhatWeSay = () => {
    return (
        <section className="relative md:py-24 py-16 overflow-hidden mt-5">
            <Slide>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src="/walking.gif" className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]" alt="" />
                                <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe size-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-slate-400">Travel Packages</span>
                                        <p className="text-xl font-bold"><span className="counter-value" data-target="50">50</span>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            <div className="lg:ms-8">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">World Best Travel <br /> Agency: Travosy</h3>
                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                                <a href="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></a>
                            </div>
                        </div>
                        <div className="absolute bottom-0 start-1/3 -z-1">
                            <img src="/map-plane-big.png" className="lg:w-[600px] w-96" alt="" />
                        </div>
                    </div>
                </div>
            </Slide>
        </section>


    );
};

export default WhatWeSay;
