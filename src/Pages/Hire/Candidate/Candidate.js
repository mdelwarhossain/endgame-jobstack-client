import React from 'react';
import { Link } from 'react-router-dom';

const Candidate = ({ candidate }) => {
    return (
        <div>
            <div className='grid grid-cols-10 mt-3'>
                <div className="  col-span-3 sm:col-span-3 lg:col-span-2">
                    <div >
                        <img className='h-40 w-40 rounded-xl'  src={candidate.profileImage} alt='' />
                    </div>
                </div>
                <div className='col-span-7 sm:col-span-7 lg:col-span-6 mt-4 rounded-md'>
                    <p className="text-center text-xl font font-bold">{candidate.name}</p>
                    <p className='text-center font-semibold'>{candidate?.headline?.slice(0,20)+"..."}</p>
                    <p className='text-center text-md'>{candidate?.skills?.slice(0,40)+"..."}</p>
                    <p className="text-center font-bold text-green-700 text-sm">Open To Be Hired</p>
                </div>
                <div className='col-span-10 lg:col-span-2 my-5'>
                    <Link className='btn-sm bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded' to={`/candidate/${candidate._id}`}><button>Profile</button></Link>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Candidate;