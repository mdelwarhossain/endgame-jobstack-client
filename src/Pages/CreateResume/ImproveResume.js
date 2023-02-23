import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const ImproveResume = () => {
    return (
        <div className="md:w-2/3 mx-auto my-10 allContainer  ">
            <h3 className='text-xl font-bold text-center'>I want to improve my resume</h3>
            <p className='text-center'><small>Learn from our resume industry expert, whose videos have been watched by over <br /> 400,000 job seekers and helped them land a job</small></p>
            <div className='my-5' >
            <iframe className='w-full' height="415" src="https://www.youtube.com/embed/Tt08KmFfIYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <h3 className='text-xl font-bold'>The fundamentals of an awesome resume (9min)</h3>
                <p className='font-bold'><small>From : <span className='text-green-700'><a target={'_blank'} href="https://www.linkedin.com/in/jsu05/">Jeff Su</a></span></small></p>
            </div>
            <div className='my-5'>
                <p className='font-semibold'>Key takeaways</p>
                <div>
                <p><small><FaHandPointRight className='inline mr-2'></FaHandPointRight>Your resume is a compelling marketing document, not an autobiography.</small></p>
                <p><small><FaHandPointRight className='inline mr-2'></FaHandPointRight>Make your resume unique by using your own voice, so you can stand out in the sea of resumes.</small></p>
                <p><small><FaHandPointRight className='inline mr-2'></FaHandPointRight>Make the words earn their spot - say what you need to without being too brief or too wordy.</small></p>
                </div>
            </div>
        </div>
    );
};

export default ImproveResume;