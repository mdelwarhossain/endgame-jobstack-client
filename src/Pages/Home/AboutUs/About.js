import React from "react";
import model from "../../../assest/images/ThinkingModel.jpg";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${model})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        height: "400px",
      }}
    >
      <div className="hero py-16 hero-overlay bg-opacity-50 text-center">
        <div className="flex-col lg:flex-row">
          <h2 className="text-5xl text-white -mt-20 italic ">
            Your Ultimate Career Platformn
          </h2>
          <p className="font-italic text-2xl text-white mt-10 italic ">
            Jobstack is the leading professional network and career development
            platform, designed to help you connect, grow, and succeed in your
            career.
          </p>
        </div>
      </div>
    </div>
    // <div className='my-24 px-4'>
    //     <h3 className='text-center font-extrabold text-3xl '>What Do We Do</h3>
    //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12'>
    //         <div className='mx-auto mt-14'>
    //             <img className='rounded-xl lg:w-[450px]' src={model} alt="" />
    //         </div>
    //         <div className=''>
    //             <div>
    //                 <h2 className='text-2xl text-center mb-7 font-bold'>SEEKER</h2>
    //                 <p className='font-bold'>A social networking site designed specifically for the business community.</p>
    //             </div>
    //             <div className='mt-5'>
    //                 <p className='mb-3'><FaHandPointRight className='inline' /> Gain exposure to Hiring Managers and Recruiters</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' />  Demonstrate your knowledge, credibility and leadership expertise</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' />  Use SEEKER as a research tool</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' /> SEEKER has a great job board</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' />  You can gain social proof for your skills and talents</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' />  Follow Companies</p>
    //                 <p className='mb-3'><FaHandPointRight className='inline' />  Join SEEKER Groups</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default About;
