import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const AllData = useLoaderData();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 '>
            {
                AllData.map(data => <div
                    key={data.id}
                    className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={data.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            {data.name}
                            <div className="badge badge-secondary">Free</div>
                        </h2>
                        <p className='text-red-600'>{data.authority}</p>
                        <div className="card-actions ">

                            <label htmlFor="my-video" className="btn btn-sm">Start Course</label>
                            
                            <input type="checkbox" id="my-video" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative ">
                                    <label htmlFor="my-video" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-4xl text-center font-bold "> {data?.name}</h3>
                                    <div className='text-center mx-auto '>
                                        <iframe className='mx-auto  w-full' src={data?.Video} height="300" title="Iframe Example"></iframe>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Courses;