import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTypewriter, Cursor } from 'react-simple-typewriter'




export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const [typeWriteText] = useTypewriter({
        words: [
            "Lets Make Your Best Trip !",
            "Embark on a journey to discover the worlds wonders.",
            "Let's Leave The Road,And Take The Travosy",
        ],
        loop: 3
    })


    return (
        <div className="relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">


                <SwiperSlide>
                    <div className="relative">
                        <img src="/bg-2.jpg" alt="" className="rounded-3xl h-fit" />
                        <div className="absolute inset-0">
                            <div className="bg-black/35 p-96 rounded-3xl">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <Cursor cursorColor='red' />
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">{typeWriteText} </h1>
                                    <p className="text-sm">Explore The World !!</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative">
                        <img src="/bg-1.jpg" alt="" className="rounded-3xl h-fit" />
                        <div className="absolute inset-0">
                            <div className="bg-black/35 p-96 rounded-3xl">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <Cursor cursorColor='red' />
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">{typeWriteText} </h1>
                                    <p className="text-sm">Explore The World !!</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="/bg-6.jpg" alt="" className="rounded-3xl h-fit" />
                        <div className="absolute inset-0">
                            <div className="bg-black/35 p-96 rounded-3xl">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <Cursor cursorColor='red' />
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">{typeWriteText} </h1>
                                    <p className="text-sm">Explore The World !!</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>


        </div>


    );
}