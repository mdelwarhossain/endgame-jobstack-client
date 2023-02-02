import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CandidateProfile = () => {
    const { user } = useContext(AuthContext);

    const data = useLoaderData();
    console.log(data);

    return (
        <div className='md:w-2/3 mx-auto my-10 bg-slate-200'>
            <div className='relative'>
                <img className='w-full' src={data.bannerImage} alt="" />
                <div className="avatar">
                    <div className="w-24 h-24 rounded-full absolute ml-5 -mt-14">
                        <img src={data.profileImage} alt='' />
                    </div>
                </div>
            </div>
            <div className='my-10 m-5 py-5'>
                <div className='flex justify-between'>
                    <p className='mb-1 text-2xl font-bold'>{data.name}</p>
                    <div>
                        <p className="btn btn-outline btn-primary mr-5">Friend</p>
                        <p className="btn btn-outline btn-primary mr-5">message</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;