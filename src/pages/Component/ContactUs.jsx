import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";


const ContactUs = () => {
    return (
        <>
        <Header></Header>
            <section className="relative lg:py-24 py-16 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src="/travel-train-station.svg" className="w-full max-w-[500px] mx-auto" alt=""/>
                        </div>

                        <div className="card lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

                                    <form method="post" name="myForm" id="myForm">
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                            <div className="lg:col-span-6">
                                                <label   className="font-semibold">Your Name:</label>
                                                <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                            </div>

                                            <div className="lg:col-span-6">
                                                <label   className="font-semibold">Your Email:</label>
                                                <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                            </div>

                                            <div className="lg:col-span-12">
                                                <label   className="font-semibold">Your Question:</label>
                                                <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :"/>
                                            </div>

                                            <div className="lg:col-span-12">
                                                <label    className="font-semibold">Your Comment:</label>
                                                <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-2">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Phone</h5>
                                <div className="mt-5">
                                    <a href="tel:+88 01324719167" className="text-red-500 font-medium">+88 01324719167</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Email</h5>

                                <div className="mt-5">
                                    <a href="mailto:help@travelzone.com" className="text-red-500 font-medium">help@travelzone.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Location</h5>
                                <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>

            <Footer></Footer>
        </>
    );
};

export default ContactUs;