import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCard = () => {
  return (
    <div className='my-5 py-10'>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative">
        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <img alt="Profile" className="absolute top-11 left-2/4 -ml-8  w-16 h-16 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-wide">Md Mohsin</h2>
            <p className="dark:text-gray-100 text-md">Web Developer || Mern Stack Developer || Full Stack Developer || Back End Developer</p>
          </div>
          <hr />
          <div className=' hover:bg-gray-200'>
            <Link to='#'>
              <div>
                <div className='flex items-center justify-between text-sm'>
                  <h3>Connection</h3>
                  <p className='text-blue-400 font-bold'>21</p>
                </div>
                <h2 className='text-md font-bold'>Grow Your Network</h2>
              </div>
            </Link>
          </div>
          <div>
            <p className='text-sm'>Access exclusive tools & insights</p>
          </div>
          <hr />
          <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
