import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { FaFileDownload, FaRegEnvelope } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const CandidateProfile = () => {
    const {user} = useContext(AuthContext); 
    const [activities, setActivities] = useState(false); 
    const candidate = useLoaderData();
    console.log(candidate);
    const {
        data: posts = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["userData", candidate?.email],
        queryFn: async () => {
          const res = await fetch(
            `https://endgame-jobstack-server.vercel.app/myPost/${candidate?.email}`
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
                    <img className='w-full ' src={candidate.bannerImage} alt="" />
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full absolute ml-5 -mt-14">
                            <img src={candidate.profileImage} alt='' />
                        </div>
                    </div>
                </div>
                <div className='my-10 m-5 py-5'>
                    <p className='mb-1 text-2xl font-bold'>{candidate.name}</p>
                    <p className='mb-7'>{candidate.headline}</p>
                    <p className='mb-7'>{candidate?.friends?.length} {candidate?.friends?.length > 1 ? 'connections': 'connection'}</p>
                    <div className='my-5'>
                        <p className='btn  btn-primary'><span className='mr-5'>resume</span> <FaFileDownload className='text-2xl'></FaFileDownload></p>
                        <Link to={`/contact/${candidate._id}`}
                        ><p className='btn  btn-primary ml-5'>contact <span className='ml-5 text-2xl'><FaRegEnvelope></FaRegEnvelope></span></p></Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='mx-5 text-2xl font-semibold'>About</p>
                <p className='my-5 mx-5'>{candidate.about}</p>
            </div>
            <div>
                {
                    candidate?.experiences &&
                     candidate?.experiences.map((experience, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{experience?.name}</p>
                     <p className='my-5 mx-5'>{candidate?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    candidate?.educations &&
                     candidate?.educations.map((education, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{education?.name}</p>
                     <p className='my-5 mx-5'>{candidate?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    candidate?.skills &&
                  <div>
                     <p className='mx-5 text-2xl font-semibold'>Skills</p>
                    <p className='my-5 mx-5'>{candidate?.skills}</p>
                  </div>
                //      candidate?.skills.map((skill, index) => <div className='shadow-xl'
                //         key={index}
                //      >
                //      <p className='mx-5 text-2xl font-semibold'>{skill?.name}</p>
                //      <p className='my-5 mx-5'>{candidate?.about}</p>
                //  </div>)
                }
            </div>
            <div>
            {
                    candidate?.projects &&
                     candidate?.projects.map((project, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{project?.name}</p>
                     <p className='my-5 mx-5'>{candidate?.about}</p>
                 </div>)
                }
            </div>
            <div>
            {
                    candidate?.languages &&
                     candidate?.languages.map((language, index) => <div
                        key={index}
                     >
                     <p className='mx-5 text-2xl font-semibold'>{language?.name}</p>
                     <p className='my-5 mx-5'>{candidate?.about}</p>
                 </div>)
                }
            </div>
        </div>
    );
};

export default CandidateProfile;