import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCheckLg } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import RealPostCard from '../../NewsFeed/RealPost/RealPostCard';

const CandidateProfile = () => {
    const { user } = useContext(AuthContext);
    const [clicked, setClicked] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();

    const data = useLoaderData();
    const email = data?.email;
    console.log(email)

    const { data: posts = [], } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/posts/${email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });
    console.log(posts);

    const handleAccept = (data) => {
        const friend = {
            name: data?.name,
            email: data?.email,
            profileImage: data?.profileImage
        };

        // save friend to the database
        fetch(`http://localhost:5000/friend/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(friend),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success('You are now friends');
                setClicked(true)
                setAccepted(true)
                // navigate('/posts')
                handleDelete(data)
            });
    }

    const handleDecline = (data) => {
        handleDelete(data)
        setClicked(true)
        toast.error('request declined')
        navigate('/friendrequest')
    }

    const handleDelete = (data) => {
        const request = {
            name: data?.name,
            email: data?.email,
            profileImage: data?.profileImage
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

            });
    }

    return (
        <div>
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
                                <Link to='/messenger'><p className="btn btn-outline btn-primary mr-5">message</p></Link>
                            </div>
                        }
                    </div>
                    <p className='mb-7'>{data.headline}</p>
                    {
                        !clicked &&
                        <div className='my-5 flex justify-center'>
                            <p onClick={() => handleAccept(data)} className="btn btn-outline btn-primary mr-5">Accept</p>
                            <p onClick={() => handleDecline(data)} className="btn btn-outline btn-primary">Decline</p>
                        </div>
                    }
                </div>
            </div>
                <div className='my-10 md:w-2/3 mx-auto'>
                    {
                        posts &&
                        posts?.map(post => <RealPostCard
                            key={post._id}
                            post={post}
                        ></RealPostCard>)
                    }
                </div>
                <div className='flex items-center justify-center mb-5'>
                <Link to='/friendrequest' className='btn btn-outline btn-primary px-8'>Back</Link>
                </div>
        </div>
    );
};

export default CandidateProfile;