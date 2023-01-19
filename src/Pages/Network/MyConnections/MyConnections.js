import React from 'react';
import RightSideCard from '../../NewsFeed/RightSideCard/RightSideCard';
import MyConnectionsCard from '../MyConnectionsCard/MyConnectionsCard';

const MyConnections = () => {
    return (
        <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
            <div className="hidden shadow-xl md:block col-span-6">
                <div className='m-5'>
                    <p className='text-2xl font-bold'>You have 49 connections</p>
                    <div className=''>
                        <p className='flex justify-between'><span className='mt-2'>Filter:</span> <select className="select w-1/2 max-w-xs">
                            <option>Recently Added</option>
                            <option>Last Name</option>
                            <option>First Name</option>
                        </select>
                        <input type="text" placeholder="search" className="input input-bordered w-1/2 max-w-s" />
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