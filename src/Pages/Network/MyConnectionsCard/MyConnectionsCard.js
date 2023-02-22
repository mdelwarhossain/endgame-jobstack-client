import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';

const MyConnectionsCard = ({friend, refetch}) => {
    const {user} = useContext(AuthContext); 
    const handleDeleteFriend =() => {
        const data = {
            name: friend?.name,
            email: friend?.email,
            profileImage: friend?.profileImage
        }
        fetch(`http://localhost:5000/deletefriend/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success(`${friend?.name} deleted Successfully`)
                refetch()
            });
    }

    return (
        <div>
                    <div className='grid grid-cols-8'>
                        <div className="avatar col-span-1">
                            <div className="w-16 rounded-full">
                                <img src={friend?.profileImage} alt='' />
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <p>{friend?.name}</p>
                            <p>{friend?.headline}</p>
                        </div>
                        <div className='flex gap-5'>
                        <Link className='mt-3' to={`/myfriend/${friend?._id}`}><p className='col-span-1'>Profile</p></Link>
                        <button className='text-red-600' onClick={handleDeleteFriend}><p className='col-span-1'>Delete</p></button>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
    );
};

export default MyConnectionsCard;