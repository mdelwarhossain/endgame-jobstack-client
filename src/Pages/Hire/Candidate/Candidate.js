import React from 'react';
import { Link } from 'react-router-dom';

const Candidate = ({ candidate }) => {
    return (
        <div>
            <div className='grid grid-cols-8'>
                <div className="avatar col-span-1 m-2 mt-4">
                    <div className="w-16 h-16 rounded">
                        <img src={candidate.profileImage} alt='' />
                    </div>
                </div>
                <div className='col-span-5 mt-4'>
                    <p className="text-xl font font-semibold">{candidate.name}</p>
                    <p>{candidate.headline}</p>
                    <p>{candidate.skills}</p>
                    <p className="text-green-600">Open To Be Hired</p>
                </div>
                <div className='col-span-2 my-5'>
                    <Link className='btn btn-outline btn-primary' to={`/candidate/${candidate._id}`}><button>Profile</button></Link>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Candidate;