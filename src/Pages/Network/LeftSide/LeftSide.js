import React, { useContext } from 'react';
import { FaUserFriends, FaPhotoVideo } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { InfoContext } from '../../../contexts/UserInfoProvider';

const LeftSide = ({currentUser}) => {
    const { user, logOut } = useContext(AuthContext);
    const { userDetails } = useContext(InfoContext);
  console.log(userDetails);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    

    return (
        <div className="">
            <div className='flex gap-4 ml-2 mt-2'>
                <img className='h-10 w-10 rounded-full' src={userDetails?.profileImage} alt="" />
                <span className='flex gap-2 mt-2'> {userDetails?.name}</span>
            </div>
            <div className='flex flex-col justify-center'>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/myconnections'>Connections</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/friendrequest'>Friend Request</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/following'>Following</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends><Link to='/followers'>Followers</Link></button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaUserFriends></FaUserFriends> Groups</button>
                <button className='flex gap-4 btn-ghost px-4 py-2'><FaPhotoVideo></FaPhotoVideo> Watch</button>
                <button onClick={handleLogOut} className='flex gap-4 btn-ghost px-4 py-2'><FaPhotoVideo></FaPhotoVideo> Logout</button>
                
            </div>
        </div>
    );
};

export default LeftSide;