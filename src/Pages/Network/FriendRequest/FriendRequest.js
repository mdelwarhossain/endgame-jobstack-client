import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';

const FriendRequest = () => {
    const {user} = useContext(AuthContext); 
    
    const { data, isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
          try {
            const res = await fetch(`http://localhost:5000/friendrequest/${user?.email}`, {
              headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const data = await res.json();
            return data;
          } catch (error) {}
        },
      });
      console.log(data);
    

      

      if (isLoading){
        return <Loading></Loading>
      }

    return (
        <div>
            {
                data?.requestReceived ?
                data?.requestReceived?.map(friend => <div key={friend?._id} className="card my-5 bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full h-32" src={data?.profileImage} alt="Shoes" />
                </figure>
                <div className="p-2 m-2">
                  <h2 className="text-xl font-semibold">{friend?.received.name}</h2>
                  <p className="text-green-600">2 mutual connections</p>
                </div>
                <div className="flex justify-around mb-2">
                  <Link to={`/receivedrequest/${friend?.received?.email}`}>
                  <p className="btn btn-outline btn-primary">Details</p></Link>
                  
                  {/* <p className="btn btn-outline btn-primary">Message</p> */}
                </div>
          </div>)
            : 
            <p className='w-2/3 mx-auto my-10 bg-slate-200 p-5'>You have no friend request to show</p>
            }
        </div>
    );
};

export default FriendRequest;