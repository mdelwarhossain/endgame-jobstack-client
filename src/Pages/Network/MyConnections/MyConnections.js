import React from 'react';
import RightSideCard from '../../NewsFeed/RightSideCard/RightSideCard';
import MyConnectionsCard from '../MyConnectionsCard/MyConnectionsCard';

const MyConnections = () => {
    return (
        <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-2 bg-slate-100 ">
            <div className="hidden shadow-2xl drop-shadow-md md:block col-span-6 py-6">
                <div className='m-5'>
                    <p className='text-2xl text-center font-bold text-slate-600 mb-3'>You have 49 connections</p>
                    <div className=''>
                        <p className='flex justify-between'><span className='mt-3 font-bold text-lg text-red-500 '>Filter:</span> <select className="border-cyan-500 rounded-xl border-2 select w-1/2 max-w-xs">
                            <option className='bg-red-200'>Recently Added</option>
                            <option className='bg-cyan-200'>Last Name</option>
                            <option className='bg-lime-200 '>First Name</option>
                        </select>
                            <input type="text" placeholder="search" className="input border-cyan-500 border-2 input-bordered w-1/2 max-w-s rounded-xl" />
                        </p>
                        <div className="divider"></div>
                    </div>
                    <MyConnectionsCard></MyConnectionsCard>
                </div>
            </div>
            <div className="hidden p-1 shadow-xl md:block col-span-2">
                <RightSideCard></RightSideCard>
            </div>
        </div>
    );
};

export default MyConnections;