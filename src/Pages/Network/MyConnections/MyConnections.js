import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';
import RightSideCard from '../../NewsFeed/RightSideCard/RightSideCard';
import MyConnectionsCard from '../MyConnectionsCard/MyConnectionsCard';

const MyConnections = () => {

    const { user } = useContext(AuthContext);

    const { data, isLoading } = useQuery({
        queryKey: ['friends'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/friends/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    console.log(data);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-2 bg-slate-100 my-10">
            <div className="hidden shadow-2xl drop-shadow-md md:block col-span-6 py-6">
                {
                    data?.length ?
                <div className='m-5'>
                    <p className='text-2xl text-center font-bold text-slate-600 mb-3'>You have {data?.length} {data?.length > 1 ? 'connections' : 'connection' }</p>
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
                    <div>
                    {
                        data?.map(friend => <MyConnectionsCard
                            key={friend._id}
                            friend={friend}
                        ></MyConnectionsCard>)
                    }
                    </div>
                </div>
                : 
                <div>
              <p className='my-10 bg-slate-200 p-5'>You have no friend request to show</p>
            <Link to='/network' className='btn btn-outline btn-primary px-8'>Back</Link>
            </div>    
            }
            </div>
            <div className="hidden p-1 shadow-xl md:block col-span-2">
                <RightSideCard></RightSideCard>
            </div>
        </div>
    );
};

export default MyConnections;