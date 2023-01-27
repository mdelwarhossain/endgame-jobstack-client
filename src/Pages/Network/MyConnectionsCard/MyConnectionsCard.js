import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';

const MyConnectionsCard = () => {

    const { user } = useContext(AuthContext);

    const { data: friends, isLoading } = useQuery({
        queryKey: ['friends'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://jobstack-server.vercel.app/friends/${user?.email}`, {
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
    console.log(friends);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                friends?.map(friend => <div key={friend._id}>
                    <div className='grid grid-cols-8'>
                        <div className="avatar col-span-1">
                            <div className="w-16 rounded-full">
                                <img src={friend?.url} alt='' />
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <p>{friend?.name}</p>
                            <p>Mern Stack Coders</p>
                        </div>
                        <button><p className='col-span-1'>Message</p></button>
                    </div>
                    <div className="divider"></div>
                </div>)
            }
        </div>
    );
};

export default MyConnectionsCard;