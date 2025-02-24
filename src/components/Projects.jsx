import React from 'react'
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination} from 'swiper/modules';

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary " id="projects">
      <div className="md:container px-5 pt-14 min-h-screen ">
      <div>
      <h2 className="title" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle text-gray" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <br />
      </div>



     
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16  max-w-[600px] drop-shadow-primary self-start "
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#c7c6c8] "
              >
                <div className="h-[350px] w-[550px] flex items-center justify-center bg-primaryLinear rounded-2xl sm:w-full xs:w-full sm:h-full xs:h-full">
                <img src={content.image} alt="..." 
                className="rounded-2xl h-[320px] w-[470px]  sm:w-full xs:w-full sm:h-full xs:h-full "
                />
                </div>
                <div className="flex justify-between gap-1 mt-2">
                  <h5 className="font-bold text-2xl font-Poppins">{content.title}</h5>
                  <div className="flex  h-16 w-16 gap-3 ">
                    <a href={content.link}><CiGlobe className="  hover:scale-125 transition duration-300 self-end text-dark_primary h-full w-full" /></a>
                    <a href={content.git}><FiGithub className="  hover:scale-125 transition duration-300 self-end text-dark_primary h-full w-full "/></a>
                
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
 


      {/* <Swiper
      pagination={{
        clickable:true,
      }}
      modules={[Pagination]}
       className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
    >
      {
        Projects.project_content.map((content,i)=> (
          <SwiperSlide key={i}
          className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
          >
            <img src={content.image} alt="..." />
            <div className="flex flex-col gap-1 mt-2">
              <h5 className="font-bold font-Poppins">{content.title}</h5>
              <button className="font-bold text-gray self-end">READ MORE</button>
            </div>
          </SwiperSlide>
        ))
      }
      
    </Swiper> */}
      </div>
    </section>
  )
}

export default Projects