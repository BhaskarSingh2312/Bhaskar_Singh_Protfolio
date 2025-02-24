import React from 'react'
import ResumeCard from './ResumeCard';
import { content } from '../../Content';




const Education = () => {
  const { Education } = content;

  return (
    <div id="education" className=" w-[95%]  flex flex-col xl:flex-row  gap-10  xl:gap-12  ml-5  mt-7 p-5 ">
      
      
      {/* PART-1 */}
    <div 
    data-aos="fade-down"
    className="h-full">

        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
   

      <div className="lgl:mt-14 mt-6 w-full h-[1000px] xs:h-full xs:w-full border-l-[6px] border-l-black border-opacity-20 flex flex-col gap-10  ">

      <ResumeCard 
            title="B.tech in Computer Science and Engineering"
            subTitle="Kamla nehru institute of physical and social sciences  (2021 - 2025)"
            des="A four-year undergraduate program focused on software development, dsa, networking, and artificial intelligence. It combines theoretical knowledge with practical applications, preparing students for careers in software development."
          />
        



        <ResumeCard
           title="Senior Secondary Education"
           subTitle="S.V.M Senior secondary school (2019 - 2021)"
           des="Completed senior secondary education with specialization in Science  Stream. Gained strong knowledge in physic, chemistry, Mathematics. Developed analytical, problem-solving, and communication skills. Participated in extracurricular activities and teamwork."
         />
         <ResumeCard
           title="Secondary Education"
           subTitle="A T L School (2017 - 2019)"
           des="Completed secondary education with a strong academic foundation, demonstrating proficiency in Mathematics, Science, English. Developed critical thinking, and communication skills. Engaged in extracurricular activities such as sports, volunteer work."
          />
       </div>
    </div>
    
    {/* PART-2 */}

    <div 
  data-aos="fade-down"
         
    className="h-full">
      
        <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
      

       <div className=" mt-6 w-full h-[900px] border-l-[6px]  xs:h-full xs:w-full border-l-black border-opacity-30 flex flex-col gap-10 capitalize ">

         <ResumeCard 
            title="java full stack developer"
            subTitle="cetpa infotech pvt ltd (08/07/2024 - 12/01/2025)"
            des="Completed a 6-month internship as a Java Full Stack Developer, gained hands-on experience in developing web applications using Java, Spring Boot, Hibernate, React and MySQL. Worked on both front-end and back-end development, API integration, and database management. Collaborated in an Agile environment."
            link="/certificates/Bhaskar Singh1.pdf"
          />
        <ResumeCard
           title="full stack web developer"
           subTitle="unified mentor (2024 - 2025)"
           des="Completed a 2-month internship as a Full Stack Web Developer, gaining hands-on experience in developing and deploying web applications using HTML, CSS, JavaScript, React, MySQL. Worked on both front-end and back-end development, API integration, and debugging, enhancing problem-solving and teamwork skills."
           link="/certificates/cert-intern-gen.pdf"
         />
         <ResumeCard
           title="java full stack developer"
           subTitle="cetpa infotech pvt ltd (08/07/2024 - 12/01/2025)"
           des="Completed 6 months of intensive training in Java Full Stack Development, gaining expertise in Java, Spring Boot, Hibernate, Frontend technologies React, MySQL, and RESTful APIs. Developed and deployed web applications, improving coding, debugging, and problem-solving skills."
          link="/certificates/Bhaskar Singh.pdf"
          />
       </div>
    </div>
 </div>

  )
}

export default Education