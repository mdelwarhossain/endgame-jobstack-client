import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';

const MyConnectionsCard = ({friend}) => {

    

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
                        <Link to={`/myfriend/${friend?._id}`}><p className='col-span-1'>Profile</p></Link>
                    </div>
                    <div className="divider"></div>
                </div>
    );
};

export default MyConnectionsCard;