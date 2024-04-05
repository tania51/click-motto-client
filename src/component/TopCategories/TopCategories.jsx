
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TopCategories.css'


const TopCategories = () => {
    return (
        <div className='lg:w-[1588px] mx-auto -mt-20 relative z-50'>
            <div className='flex gap-1 items-center justify-end text-white pb-3'>
                <p>Photo of the Day</p><span className='text-gray-400'>by</span><a href="#" className='underline'>John Doe</a>
            </div>
            <div className='bg-white px-[32px]'>
                <h3 className='text-[#333333] text-[26px] font-semibold pt-3 pb-2'>Top categories</h3>
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='slide-bg-1 slider-categroies'>
                            <div className="title flex w-full h-full justify-center items-center text-2xl font-semibold text-white" data-swiper-parallax="-300">
                                Workspace
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-bg-2 slider-categroies'>
                            <div className="title flex w-full h-full justify-center items-center text-2xl font-semibold text-white" data-swiper-parallax="-300">
                            Summer
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-bg-3 slider-categroies'>
                            <div className="title flex w-full h-full justify-center items-center text-2xl font-semibold text-white" data-swiper-parallax="-300">
                            City
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-bg-4 slider-categroies'>
                            <div className="title flex w-full h-full justify-center items-center text-2xl font-semibold text-white" data-swiper-parallax="-300">
                            Food
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-bg-5 slider-categroies'>
                            <div className="title flex w-full h-full justify-center items-center text-2xl font-semibold text-white" data-swiper-parallax="-300">
                            Gravity
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;