import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='md:w-1/2 mx-auto my-5'>
            <div>
                <div className='grid grid-cols-8'>
                    <div className="avatar col-span-1 m-2 mt-4">
                        <div className="w-24 h-24 rounded">
                            <img src="" alt='' />
                        </div>
                    </div>
                    <div className='col-span-6 mt-4'>
                        <p className="text-xl font font-semibold">React Developer {data?.title}</p>
                        <p>Coders Solutions Pvt. Ltd. {data?.name}</p>
                        <p>{data?.location}</p>
                        <div className='flex justify-between'>
                        <p className="text-green-600">2 Applicants {data?.vacancy}</p>
                        <Link className='btn btn-outline btn-primary'>Apply Now</Link>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold p-2 bg-gray-200'>About Us</h1>
                <p className='p-2'>{data?.aboutUs}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold p-2 bg-gray-200'>What you do with us</h1>
                <p className='p-2'>{data?.task}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold p-2 bg-gray-200'>What you bring with you</h1>
                <p className='p-2'>{data?.profile}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold p-2 bg-gray-200'>What benefits await you</h1>
                <p className='p-2'>{data?.offer}</p>
            </div>
        </div>
    );
};

export default JobDetails;