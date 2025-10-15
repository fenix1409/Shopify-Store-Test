// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from './sections/Hero';

export default function SwiperHero() {
    return (
        <>
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Hero /></SwiperSlide>
                <SwiperSlide><Hero /></SwiperSlide>
                <SwiperSlide><Hero /></SwiperSlide>
            </Swiper>
        </>
    );
}
