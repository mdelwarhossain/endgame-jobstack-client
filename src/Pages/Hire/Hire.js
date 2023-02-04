import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/LoadingPage/LoadingPage';
import Candidate from './Candidate/Candidate';

const Hire = () => {
    const { user } = useContext(AuthContext);
    const { data = [], isLoading } = useQuery({
        queryKey: ['alluser'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/alluser', {
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

    const { data: singleUser } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
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
        <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4  ">
            <div className="col-span-2 mt-5 ">
                <div className="">
                    <div className='flex gap-4 ml-2 mt-2'>
                        <img className='h-10 w-10 rounded-full' src={singleUser?.profileImage} alt="" />
                        <span className='flex gap-2 mt-2'> {singleUser?.name}</span>
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                        <Link to={`/jobs/${user?.email}`} className='btn btn-outline btn-primary shadow-md'>My Posts</Link>
                        <Link to='/addajob' className='btn btn-outline btn-primary shadow-md'>Add a job</Link>

                    </div>
                </div>
            </div>
            <div className="col-span-6 mt-4 py-2 rounded-2xl drop-shadow-xl bg-slate-100 ">
                {
                    data?.map(candidate => <Candidate
                        key={candidate._id}
                        candidate={candidate}
                    ></Candidate>)}
            </div>
        </div>
    );
};

export default Hire;