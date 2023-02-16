import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { FaFileDownload, FaRegEnvelope } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CandidateProfile = () => {
    const {user} = useContext(AuthContext); 
    const [activities, setActivities] = useState(false); 
    const userDetails = useLoaderData();
    const {
        data: posts = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["userData", userDetails?.email],
        queryFn: async () => {
          const res = await fetch(
            `https://endgame-jobstack-server.vercel.app/myPost/${userDetails?.email}`

          );
          const data = await res.json();
          // console.log(data);
          return data;
        },
      });
console.log(posts);
    return (
        <div className='md:w-2/3 mx-auto my-10 rounded-2xl shadow-2xl bg-slate-100'>
            <div className=''>
                <div className='relative '>
                    <img className='w-full ' src={userDetails?.bannerImage} alt="" />
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full absolute ml-5 -mt-14">
                            <img src={userDetails?.profileImage} alt='' />
                        </div>
                    </div>
                </div>
                <div className='my-10 m-5 py-5'>
                    <p className='mb-1 text-2xl font-bold'>{userDetails?.name}</p>
                    <p className='mb-7'>{userDetails?.headline}</p>
                    <p className='mb-7'>{userDetails?.friends?.length} {userDetails?.friends?.length > 1 ? 'connections': 'connection'}</p>
                    <div className='my-5'>
                        <Link to={`/candidateresume/${userDetails?.email}`} className='btn  btn-primary'><span className='mr-5'>resume</span> <FaFileDownload className='text-2xl'></FaFileDownload></Link>
                        <Link to={`/contact/${userDetails._id}`}
                        ><p className='btn  btn-primary ml-5'>contact <span className='ml-5 text-2xl'><FaRegEnvelope></FaRegEnvelope></span></p></Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='mx-5 text-2xl font-semibold'>About</p>
                <p className='my-5 mx-5'>{userDetails.about}</p>
            </div>
            <div>
                {
                    userDetails?.experiences &&
                     userDetails?.experiences.map((experience, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{experience?.name}</p>
                     <p className='my-5 mx-5'>{userDetails?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    userDetails?.educations &&
                     userDetails?.educations.map((education, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{education?.name}</p>
                     <p className='my-5 mx-5'>{userDetails?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    userDetails?.skills &&
                  <div>
                     <p className='mx-5 text-2xl font-semibold'>Skills</p>
                    <p className='my-5 mx-5'>{userDetails?.skills}</p>
                  </div>
                //      userDetails?.skills.map((skill, index) => <div className='shadow-xl'
                //         key={index}
                //      >
                //      <p className='mx-5 text-2xl font-semibold'>{skill?.name}</p>
                //      <p className='my-5 mx-5'>{userDetails?.about}</p>
                //  </div>)
                }
            </div>
            <div>
            {
                    userDetails?.projects &&
                     userDetails?.projects.map((project, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{project?.name}</p>
                     <p className='my-5 mx-5'>{userDetails?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    userDetails?.languages &&
                     userDetails?.languages.map((language, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{language?.name}</p>
                     <p className='my-5 mx-5'>{userDetails?.about}</p>
                 </div>)
                }
            </div>
        </div>
    );
};

export default CandidateProfile;