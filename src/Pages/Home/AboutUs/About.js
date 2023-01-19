import React from 'react';
import model from '../../../assest/images/ThinkingModel.jpg'
import { FaHandPointRight } from 'react-icons/fa';

const About = () => {
    return (
        <div className='my-24 px-4 '>
            <h3 className='text-center font-extrabold text-3xl '>What Do We Do</h3>
            <div className='grid mt-12  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12'>
                <img className='rounded-xl' src={model} alt="" />
                <div>
                    <div>
                        <h2 className='text-2xl text-center mb-7 font-bold '>SEEKER</h2>
                        <p className='font-bold'>A social networking site designed specifically for the business community.</p>
                    </div>
                    <div className='mt-5'>
                        <p className='mb-3'><FaHandPointRight className='inline' /> Gain exposure to Hiring Managers and Recruiters</p>
                        <p className='mb-3'><FaHandPointRight className='inline' />  Demonstrate your knowledge, credibility and leadership expertise</p>
                        <p className='mb-3'><FaHandPointRight className='inline' />  Use SEEKER as a research tool</p>
                        <p className='mb-3'><FaHandPointRight className='inline' /> SEEKER has a great job board</p>
                        <p className='mb-3'><FaHandPointRight className='inline' />  You can gain social proof for your skills and talents</p>
                        <p className='mb-3'><FaHandPointRight className='inline' />  Follow Companies</p>
                        <p className='mb-3'><FaHandPointRight className='inline' />  Join SEEKER Groups</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;