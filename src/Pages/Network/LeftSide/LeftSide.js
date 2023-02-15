import React, { useContext, useEffect, useState } from 'react';
import { FaUserFriends, FaPhotoVideo } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const LeftSide = () => {

    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [currentUserDetails, setCurrentUserDetails] = useState();
    // const waitTime = 1000;

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setCurrentUserDetails(data);
    //             });
    //     }, waitTime);
    //     return () => clearInterval(id);
    // }, [user?.email]);


    useEffect(() =>{
        fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setCurrentUserDetails(data);
                });
    },[user?.email])

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="shadow-xl">
            <div className='flex gap-4 ml-2 mt-2'>
                <img className='h-10 w-10 rounded-full' src={currentUserDetails?.profileImage} alt="" />
                <span className='flex gap-2 mt-2'> {currentUserDetails?.name}</span>
            </div>
            <div className='flex flex-col justify-center'>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/myconnections'>Connections</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/friendrequest'>Friend Request {currentUserDetails?.requestReceived?.length ? <span className='text-white font-semibold rounded-full bg-red-500 px-1'>{currentUserDetails?.requestReceived?.length}</span> : <span></span>}</Link></button>
                {/* <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/following'>Following</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/followers'>Followers</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends> Groups</button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaPhotoVideo></FaPhotoVideo> Watch</button>
                <button onClick={handleLogOut} className='flex gap-4 btn-ghost px-4 py-2'><FaPhotoVideo></FaPhotoVideo> Logout</button> */}

            </div>
        </div>
    );
};

export default LeftSide;