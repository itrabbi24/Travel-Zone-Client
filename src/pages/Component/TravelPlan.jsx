import { Slide } from "react-awesome-reveal";

const TravelPlan = () => {
    return (
        <>
            <Slide direction="right">
                <section className="py-12 about-section2">
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full md:w-1/2 px-4">
                                <img src="/get-about-us-img.svg" alt="Get About Us" />
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <h4 className="text-md uppercase font-bold text-primary-900 mb-2">Discover Amazing Tours</h4>
                                <br />
                                <h2>We create unforgettable journeys</h2>
                                <p>Embark on an adventure of a lifetime with our meticulously crafted tours and travel packages. Whether you're seeking thrilling expeditions or serene getaways, we have something for everyone.</p>
                                <br />
                                <ul className="ul-list border-b border-primary-800 mb-8">
                                    <li>
                                        <h6 className="text-lg mb-0 text-black">Years of Expertise</h6>
                                        <p className="text-md">With decades of experience, our team ensures every detail of your trip is carefully planned and executed.</p>
                                    </li>
                                    <br />
                                    <li>
                                        <h6 className="text-lg mb-0 text-black">Professional Guides</h6>
                                        <p className="text-md">Our knowledgeable guides accompany you every step of the way, enriching your journey with insights and expertise.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Slide>
        </>
    );
};

export default TravelPlan;
