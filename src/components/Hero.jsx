import React from 'react'
import {content} from '../Content';

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
         data-aos="slide-left"
          data-aos-delay="1200"
        className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
        <h1 className="rotate-90 absolute top-[25%] md:top-[35%] right-[-25%] md:right-[-25%] xl:right-[-15%] xxl:right-[-25%] xms:right-[-25%] sm:right-[-40%] xs:right-[-40%] text-[#EAF2FA]">
          {hero.firstName}{" "}
          <span className="text-dark_primary">
            {hero.LastName}
          </span>
        </h1>

        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="sm:text-center ">Web Developer</h2>
          <br/>
          <p className="sm:text-center">Knack of building applications with 
            <br/>Front and Back End operations.</p>
          <br/>
          <div className="flex justify-end">
          <a href="/Bhaskar Singh Web Developer.pdf" download="Bhaskar_Singh_Resume.pdf"><button className='btn cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition'>{hero.btnText}</button></a>
          </div>
          
          <div className="flex flex-col gap-10 mt-10">
          {hero.hero_content.map((content, i)=>(
              <div  key={i} 
              data-aos="fade-down"
                data-aos-delay={i * 300}
              className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}  `}>
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))
          }
        </div>
        </div>
        
        <div className="md:h-[37rem] h-96 ">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="BS"
            className="h-full  object-cover "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;