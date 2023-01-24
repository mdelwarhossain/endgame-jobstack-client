import React from "react";
import { FaEdit, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfileInfo = () => {
  return (
    <div className='my-5 py-10'>
      <div className="max-w-full rounded-md bg-gray-200 relative">

        <div className="relative">
          <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500 cursor-pointer" />
          {/* User Backgroud Modal */}
          <label htmlFor="my-modal-4" className="">
            <span className="absolute top-5 right-5 text-indigo-600 bg-slate-100 rounded-full p-1 cursor-pointer">
              <FaPen />
            </span>
          </label>

          {/* basic modal user background */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
          </div>

        </div>


        <div className="flex flex-col justify-between p-6 space-y-8">
          {/* User Profile Modal */}
          <label htmlFor="my-modal-5" className="">
            <img alt="Profile" className="absolute top-32 left-20 -ml-8  w-32 h-32 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800 cursor-pointer" src="https://source.unsplash.com/40x40/?portrait?1" />
          </label>

          {/* basic modal user profile */}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
          </div>



          <div className="shadow-lg p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold tracking-wide">Md Mohsin</h2>
                <label htmlFor="my-modal-3" className=""><FaEdit className="text-2xl cursor-pointer" /></label>
              </div>
              <p className="dark:text-gray-100 text-md">Web Developer || Mern Stack Developer || Full Stack Developer || Back End Developer</p>
            </div>
            <hr className="mt-4" />
            <div className=' hover:bg-gray-200'>
              <Link to='#'>
                <div className="my-6">
                  <div className='flex items-center justify-between text-sm'>
                    <h3>Connection</h3>
                    <p className='text-blue-400 font-bold'>21</p>
                  </div>
                  <h2 className='text-md font-bold'>Grow Your Network</h2>
                </div>
              </Link>
            </div>
            {/* Your Address */}
            <div>
              <p className='text-sm'>Access exclusive tools & insights</p>
              <p className="text-md mt-2">Chandpur District, Chattogram, Bangladesh</p>
            </div>
          </div>

          {/* get about */}
          <hr />
          <div className="mt-6 shadow-lg p-6">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3">I am Mohsin, a Front-end Application developer from Bangladesh. My Dream becomes a Full stack Application developer. I spend my most of time coding outstanding projects and learning more technologies. Out of my love and passion for programming.</p>
          </div>
          <hr />

          {/* Your Education */}
          <div className="mt-6 shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <h2 className="text-md font-semibold">Dhaka University</h2>
            <h2 className="text-md font-semibold">Jatrabari High School</h2>
          </div>

          {/* Your Skills */}
          <div className="mt-6 shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <p className="mt-3 font-semibold">Web Developer</p>
            <p className="mt-3 font-semibold">Front End Developer</p>
            <p className="mt-3 font-semibold">Backend Developer</p>
            <p className="mt-3 font-semibold">Mern Developer</p>
            <p className="mt-3 font-semibold">Full Stack Developer</p>
          </div>

          {/* Your Best Projects */}
          <div className="mt-6 shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <p className="mt-3 font-semibold">Web Developer</p>
          </div>

        </div>
      </div>


      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
