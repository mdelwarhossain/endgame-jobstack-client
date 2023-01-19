import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import NetworkCard from './NetworkCard/NetworkCard';

const Network = () => {
    return (
        <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="hidden shadow-xl md:block col-span-2">
        <LeftSide></LeftSide>
      </div>
      <div className="col-span-4">
        <NetworkCard></NetworkCard>
      </div>
      <div className="hidden p-1 shadow-xl md:block col-span-2">
        {/* <RightSideCard></RightSideCard> */}
      </div>
    </div>
    );
};

export default Network;