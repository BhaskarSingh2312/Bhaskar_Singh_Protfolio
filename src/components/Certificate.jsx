import React from 'react'
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { useState } from "react";
import { Pagination } from 'swiper/modules';

const Certificate = () => {
    const { Certificate } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    


 
    <section className="overflow-hidden">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Certificate.title}
        </h2> 
        <h4 className="subtitle text-gray" data-aos="fade-down">
          {Certificate.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Certificate.certificates_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-14 w-16 rounded-full" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <div className="flex md:flex-row flex-col md:justify-between md:gap-80 gap-10">
                  <h6>{content.name}</h6>
                  <div className="flex">
                  <a href={content.link}><button className="cursor-pointer">
  <div
    className="w-[63px] h-[63px] bg-blue-50 rounded-full relative shadow-[inset_0px_0px_1px_1px_rgba(0,0,0,0.3),_2px_3px_5px_rgba(0,0,0,0.1)] flex items-center justify-center"
  >
    <div
      className="absolute w-[52px] h-[52px] z-10 bg-black rounded-full left-1/2 -translate-x-1/2 top-[5px] blur-[1px]"
    ></div>
    <label
      className="group cursor-pointer absolute w-[52px] h-[52px] bg-gradient-to-b from-blue-600 to-blue-400 rounded-full left-1/2 -translate-x-1/2 top-[5px] shadow-[inset_0px_4px_2px_#60a5fa,inset_0px_-4px_0px_#1e3a8a,0px_0px_2px_rgba(0,0,0,10)] active:shadow-[inset_0px_4px_2px_rgba(96,165,250,0.5),inset_0px_-4px_2px_rgba(37,99,235,0.5),0px_0px_2px_rgba(0,0,0,10)] z-20 flex items-center justify-center"
    >
      <div
        className="w-8 group-active:w-[31px] fill-blue-100 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.5)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24">
          <path
            d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"
          ></path>
        </svg>
      </div>
    </label>
  </div>
</button></a>

                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  

  )
}

export default Certificate