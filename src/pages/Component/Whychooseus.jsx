import { Slide } from "react-awesome-reveal";

const Whychooseus = () => {
    return (
        <>
            <div>
                <Slide direction="left">
                <section className="why-choose-us-section pt-20 md:pt-32 pb-10 md:pb-20 lg:pb-28 lg:-mt-14 relative">
                <div className="absolute -top-0 lg:-top-12 left-0 w-full">
                    <img src="/why-choose-us-bg.svg" alt="why-choose-us-bg" className="w-full block"/>
                </div>
                <div className="container relative">
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-4xl font-bold">Why choose us?</h2>
                        <p className="max-w-[590px] mx-auto">Explore our fantastic tour and travel services to make your journey memorable.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7">
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/world-tour-icon.svg" alt="world-tour-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Set Travel Plan</h5>
                                <p className="text-sm mb-0">Choose your destinations and let us help you plan your perfect trip.</p>
                            </div>
                        </div>
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/travelling-icon.svg" alt="travelling-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Explore Around</h5>
                                <p className="text-sm mb-0">Discover new places and create unforgettable memories.</p>
                            </div>
                        </div>
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/best-guide-icon.svg" alt="best-guide-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Best Guide</h5>
                                <p className="text-sm mb-0">Experience the best of your destination with our expert guides.</p>
                            </div>
                        </div>
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/support-icon.svg" alt="support-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Support 24/7</h5>
                                <p className="text-sm mb-0">Get assistance round the clock for a hassle-free travel experience.</p>
                            </div>
                        </div>
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/luxary-hotel-icon.svg" alt="luxary-hotel-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Luxury Hotel</h5>
                                <p className="text-sm mb-0">Relax and unwind in luxury accommodations during your stay.</p>
                            </div>
                        </div>
                        <div className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5">
                            <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                                <img src="/easy-booking-icon.svg" alt="easy-booking-icon" className=""/>
                            </div>
                            <div className="">
                                <h5 className="text-lg mb-2">Easy Booking</h5>
                                <p className="text-sm mb-0">Book your trip hassle-free with our easy-to-use booking system.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
                </Slide>
            </div>
        </>
    );
};

export default Whychooseus;
