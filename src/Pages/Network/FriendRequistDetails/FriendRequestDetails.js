import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CandidateProfile = () => {
    const {user} = useContext(AuthContext); 
    const [clicked, setClicked] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const data = useLoaderData();
    console.log(data);

    const handleAccept = () => {
        setClicked(true)
        setAccepted(true)
        toast.success('request accepted')
    }

    const handleDecline = (data) => {
        const request = {
            name: data?.name,
            email: data?.email
        }; 
        console.log(request);
        // save connections to the database
    fetch(`http://localhost:5000/requestdeclined/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(request),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setClicked(true)
          toast.error('request declined')
          // navigate('/posts')
        });
    }

    return (
        <div className='md:w-2/3 mx-auto my-10 bg-slate-200'>
            <div className='relative'>
                <img className='w-full' src={data.bannerImage} alt="" />
                <div className="avatar">
                    <div className="w-24 h-24 rounded-full absolute ml-5 -mt-14">
                        <img src={data.profileImage} alt='' />
                    </div>
                </div>
            </div>
            <div className='my-10 m-5 py-5'>
                <div className='flex justify-between'>
                <p className='mb-1 text-2xl font-bold'>{data.name}</p>
                {
                                accepted && <div>
                                    <p className="btn btn-outline btn-primary mr-5">Friend</p>
                                <p className="btn btn-outline btn-primary mr-5">message</p>
                                </div>
                            }
                </div>
                <p className='mb-7'>{data.headline}</p>
                {
                    !clicked &&
                        <div className='my-5 flex justify-center'>
                            <p onClick={handleAccept} className="btn btn-outline btn-primary mr-5">Accept</p>
                            <p onClick={() => handleDecline(data)} className="btn btn-outline btn-primary">Decline</p>
                        </div>
                }

            </div>
        </div>
    );
};

export default CandidateProfile;