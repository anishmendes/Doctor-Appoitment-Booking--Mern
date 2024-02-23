import React from "react";
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi';


const Testimonial = () => {
return (
  <div className="mt-[30px] lg:mt-[55px]">
    <Swiper
    modules={[Pagination]}
      spaceBetween={30} 
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className="py-[30px] px-5 rounded-[13px]">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Anish Mainali
              </h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
};

export default Testimonial;
