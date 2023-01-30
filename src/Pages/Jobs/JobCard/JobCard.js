import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {

  return (
    <div>
      <div className='grid grid-cols-10'>
        <div className="avatar col-span-3 sm:col-span-3 lg:col-span-2 m-2 mt-4 ml-4">
          <div className="mr-3">
            <img className='w-18 h-18 rounded' src={job?.logo} alt='' />
          </div>
        </div>
        <div className='col-span-7 sm:col-span-7 lg:col-span-6 mt-4'>
          <p className="text-xl font font-bold">{job?.title}</p>
          <p className='font-semibold'>Coders Solutions Pvt. Ltd. {job?.name}</p>
          <p className='text-md'>{job?.location}</p>
          <p className="text-orange-600 text-sm">{job.vacancy} {job?.vacancy > 1 ? 'vacant positions' : 'vacant position'}</p>
        </div>
        <div className='col-span-10 lg:col-span-2 mt-4 mx-3 lg:mx-0 lg:mt-10 lg:mr-1'>
          <Link className='btn btn-outline btn-md bg-orange-400 border-none text-white' to={`/job/${job._id}`}><button>See Details</button></Link>
        </div>
      </div>

      <div className='divider'></div>

    </div>
  );
};

export default JobCard;