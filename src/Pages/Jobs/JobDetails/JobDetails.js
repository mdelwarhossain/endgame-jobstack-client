import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='md:w-1/2  allContainer mx-auto my-5'>
            <div>
                <div className='grid grid-cols-8 '>
                    <div className="avatar col-span-1 mx-4 mt-4">
                        <div className="w-24 h-24 rounded">
                            <img src={data?.logo} alt='' />
                        </div>
                    </div>
                    <div className='col-span-6  mt-4'>
                        <p className="text-xl font font-semibold">{data?.title}</p>
                        <p>{data?.name}</p>
                        <p>{data?.location}</p>
                        <div className='flex justify-between'>
                            <p className="text-green-600">{data.vacancy} {data?.vacancy > 1 ? 'vacant positions' : 'vacant position'}</p>
                            <a className='btn bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded' href={data.url} target='_blank' rel="noreferrer">Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            <div className='border-x-0 '>
                <h1 className='text-2xl border border-gray-300 rounded-lg font-semibold p-2 bg-gray-200'>About Us</h1>
                <p className='p-2 border border-gray-300 rounded-lg'>{data?.aboutUs}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold p-2 border border-gray-300 rounded-lg bg-gray-200'>What you do with us</h1>
                <p className='p-2 border border-gray-300 rounded-lg'>{data?.task}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold border border-gray-300 rounded-lg p-2 bg-gray-200'>What you bring with you</h1>
                <p className='p-2 border border-gray-300 rounded-lg'>{data?.profile}</p>
            </div>
            <div className='border-x-0'>
                <h1 className='text-2xl font-semibold border border-gray-300 rounded-lg p-2 bg-gray-200'>What benefits await you</h1>
                <p className='p-2 border border-gray-300 rounded-lg'>{data?.offer}</p>
            </div>
            <Link className='btn bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mx-auto my-10' to='/jobs'>Back to Jobs</Link>
        </div>
    );
};

export default JobDetails;