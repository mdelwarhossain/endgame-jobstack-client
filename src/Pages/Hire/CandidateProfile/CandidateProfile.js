import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CandidateProfile = () => {

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
                    <p className='mb-1 text-2xl font-bold'>{data.name}</p>
                    <p className='mb-7'>{data.headline}</p>
                    <p>{data.about}</p>
                    <div className='my-5 flex justify-center'>
                        <p className='btn btn-outline btn-primary'><span className='mr-5'>resume</span> <FaFileDownload className='text-2xl'></FaFileDownload></p>
                        <p className='btn btn-outline btn-primary ml-5'>contact</p>
                    </div>
                </div>
        </div>
    );
};

export default CandidateProfile;