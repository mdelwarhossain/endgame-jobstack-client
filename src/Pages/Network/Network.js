import React from 'react';
import { Link } from 'react-router-dom';
import Sponsored from '../NewsFeed/LeftSideCard/Sponsored/Sponsored';
import LeftSide from './LeftSide/LeftSide';
import NetworkCard from './NetworkCard/NetworkCard';

const Network = () => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-2 mt-5">
        <LeftSide></LeftSide>
        <div className="divider"></div>
        <Sponsored></Sponsored>
        <Link to="/jobs" className='text-center text-green-600 btn btn-outline btn-primary ml-5'>See Who Is Hiring</Link>
      </div>
      <div className="col-span-6">
        <NetworkCard></NetworkCard>
      </div>
    </div>
  );
};

export default Network;