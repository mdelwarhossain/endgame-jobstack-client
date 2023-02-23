import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';
import RightSideCard from '../../NewsFeed/RightSideCard/RightSideCard';
import MyConnectionsCard from '../MyConnectionsCard/MyConnectionsCard';

const MyConnections = () => {

    const { user } = useContext(AuthContext);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['friends'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://endgame-jobstack-server.vercel.app/friends/${user?.email}`, {
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
                            <div className='flex justify-between'>
                                <p className='text-2xl text-center font-bold text-slate-600 mb-3'>You have {data?.length} {data?.length > 1 ? 'Friends' : 'Friend'}</p>
                                <p>
                                    <input type="text" placeholder="search" className="input border-cyan-500 border-2 input-bordered w-1/2 max-w-s rounded-xl" />
                                </p>
                            </div>
                                <div className="divider"></div>
                            <div>
                                {
                                    data?.map(friend => <MyConnectionsCard
                                        // key={friend._id}
                                        friend={friend}
                                        refetch={refetch}
                                    ></MyConnectionsCard>)
                                }
                            </div>
                        </div>
                        :
                        <div className='ml-5'>
                            <p className='my-10 bg-slate-200 p-5'>You have no friend to show</p>
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