import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { BsFillCloudDownloadFill,BsFillFilePostFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { MdEmojiPeople } from 'react-icons/md';

const Statistics = () => {
  const [counterOn,setCounterOn] = useState(false)
  return (
    
    
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='mt-8 mb-12 font-bold text-5xl text-center underline'>Our Statistics</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center bg-green-300 m-5 p-5 rounded">

           
            
          <div className=" flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12 ">
            
            <BsFillCloudDownloadFill size={40}/>

            
          </div>
          <h1 className='text-4xl'>
          <CountUp className="text-4xl font-bold text-deep-purple-accent-400" start={0}
            end={819}
            duration={2} delay={0}  />
            +
          </h1>
          
          <p className="mb-2 font-bold text-md">Downloads</p>
          <p className="text-gray-700">
            It’s something that’s many of the wisest people in history have kept
            in mind.
          </p>
        </div>
        <div className="text-center bg-purple-300 m-5 p-5 rounded">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <MdEmojiPeople size={40}/>
          </div>
          <h1 className='text-4xl'>
          <CountUp className="text-4xl font-bold text-deep-purple-accent-400" start={0}
            end={1.3}
            duration={2} delay={0}  />
            k+
          </h1>
          <p className="mb-2 font-bold text-md">Registered Users</p>
          <p className="text-gray-700">
            For many men, the acquisition of wealth does not end their troubles,
            it only changes them.
          </p>
        </div>
        <div className="text-center bg-blue-300 m-5 p-5 rounded">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <HiUsers size={40}/>
          </div>
          
          <h1 className='text-4xl'>
          <CountUp className="text-4xl font-bold text-deep-purple-accent-400" start={0}
            end={91}
            duration={2} delay={0}  />
            +
          </h1>
          <p className="mb-2 font-bold text-md">Active People</p>
          <p className="text-gray-700">
            It's a helluva start, being able to recognize what makes you happy
            today, in this moment.
          </p>
        </div>
        <div className="text-center bg-cyan-300 m-5 p-4 rounded">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <BsFillFilePostFill size={40}/>
          </div>
          <h1 className='text-4xl'>
          <CountUp className="text-4xl font-bold text-deep-purple-accent-400" start={0}
            end={152}
            duration={2} delay={0}  />
            +
          </h1>
          <p className="mb-2 font-bold text-md">Posts</p>
          <p className="text-gray-700">
            Happiness is when what you think, what you say, and what you do are
            in harmony.
          </p>
        </div>
      </div>
    </div>
    
    
  )
}

export default Statistics