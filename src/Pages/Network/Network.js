import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Sponsored from '../NewsFeed/LeftSideCard/Sponsored/Sponsored';
import LeftSide from './LeftSide/LeftSide';
import NetworkCard from './NetworkCard/NetworkCard';

const Network = () => {

  const { user } = useContext(AuthContext);
  // console.log(userDetails)
  const { data: usersCollection = [], isLoading, refetch } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(`https://endgame-jobstack-server.vercel.app/recommendedusers/${user?.email}`, {
        });
        const data = await res.json();
        // console.log(data)
        return data;
      } catch (error) { }
    },
  });

  return (
    <div className="px-4 allContainer  grid grid-cols-1 md:grid-cols-8 gap-4 ">
      <div className="col-span-2 mt-5">
        <LeftSide
        ></LeftSide>
        <div className='hidden md:block'>
          <Sponsored></Sponsored>
        </div>
        <Link to="/jobs" className='text-center text-green-600 btn btn-outline btn-primary md:ml-5 mb-5'>See Who Is Hiring</Link>
      </div>
      <div className=" mt-5 col-span-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            usersCollection?.map(dbuser => <NetworkCard
              key={dbuser._id}
              dbuser={dbuser}
              isLoading={isLoading}
              refetch={refetch}
            ></NetworkCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Network;