import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
  
    return (
        <div>
          <div className='grid grid-cols-8'>
            <div className="avatar col-span-1 m-2 mt-4">
              <div className="w-16 h-16 rounded">
                <img src="" alt='' />
              </div>
            </div>
            <div className='col-span-5 mt-4'>
              <p className="text-xl font font-semibold">{job?.title}</p>
              <p>Coders Solutions Pvt. Ltd. {job?.name}</p>
              <p>{job?.location}</p>
              <p className="text-green-600">{job.vacancy} {job?.vacancy > 1 ? 'vacant positions' : 'vacant position'}</p>
            </div>
            <div className='col-span-2 my-10'>
            <Link className='btn btn-outline btn-primary' to={`/job/${job._id}`}><button>See Details</button></Link>
            </div>
          </div>
          <div className="divider"></div>
        </div>
    );
};

export default JobCard;