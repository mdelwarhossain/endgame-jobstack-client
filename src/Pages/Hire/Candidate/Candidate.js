import React from 'react';
import { Link } from 'react-router-dom';

const Candidate = ({ candidate }) => {
    return (
        <div>
            <div className='grid grid-cols-10 mt-3'>
                <div className="avatar col-span-3 sm:col-span-3 lg:col-span-2 m-2 mt-4">
                    <div className="mr-3">
                        <img className='w-18 h-18 rounded' src={candidate.profileImage} alt='' />
                    </div>
                </div>
                <div className='col-span-7 sm:col-span-7 lg:col-span-6 mt-4'>
                    <p className="text-xl font font-bold">{candidate.name}</p>
                    <p className='font-semibold'>{candidate.headline}</p>
                    <p className='text-md'>{candidate.skills}</p>
                    <p className="text-orange-600 text-sm">Open To Be Hired</p>
                </div>
                <div className='col-span-10 lg:col-span-2 my-5'>
                    <Link className='btn btn-outline btn-md bg-orange-400 border-none text-white' to={`/candidate/${candidate._id}`}><button>Profile</button></Link>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Candidate;