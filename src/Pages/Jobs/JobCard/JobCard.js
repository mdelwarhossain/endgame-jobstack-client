import React from 'react';

const JobCard = () => {
    return (
        <div>
          <div className='grid grid-cols-8'>
            <div className="avatar col-span-1 m-2 mt-4">
              <div className="w-16 h-16 rounded">
                <img src="" alt='' />
              </div>
            </div>
            <div className='col-span-6 mt-4'>
              <p className="text-xl font font-semibold">React Developer{}</p>
              <p>Coders Solutions Pvt. Ltd.</p>
              <p>Dhaka, Bangladesh</p>
              <p className="text-green-600">2 Applicants</p>
            </div>
            <button><p className='col-span-1 btn btn-ghost'>Apply</p></button>
          </div>
          <div className="divider"></div>
        </div>
    );
};

export default JobCard;