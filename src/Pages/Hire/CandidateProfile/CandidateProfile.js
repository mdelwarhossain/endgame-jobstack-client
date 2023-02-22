import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { set } from "react-hook-form";
import { FaExternalLinkAlt, FaFileDownload, FaRegEnvelope } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import CardLoader from "../../../Shared/LoadingPage/CardLoader/CardLoader";
import cp from '../../../assest/images/cp.jpg'
import pp from '../../../assest/images/pp.jpg'

const CandidateProfile = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState(false);
  const userDetails = useLoaderData();
  console.log(userDetails)
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

  const [userProjects, setUserProjects] = useState()
  

  const {
      data: projects= [],
  
    } = useQuery({
      queryKey: ["projects", userDetails?.email],
      queryFn: async () => {
        const res = await fetch(
          `https://endgame-jobstack-server.vercel.app/projects/${userDetails?.email}`
        );
        const data = await res.json();
        setUserProjects(data)
        console.log(data);
        return data;
      },
    });

console.log(userProjects)

  return (

 <div className="md:w-2/3 mx-auto my-10  ">
 <div className="">
   <div className="relative border border-gray-300 rounded-lg ">
     {/* <img className="w-full " src={userDetails?.bannerImage} alt="" /> */}
     {
      userDetails?.bannerImage?  <img className="w-full " src={userDetails?.bannerImage} alt="" /> :
        <img className="w-full " src={cp} alt="" />
     }
     <div className="avatar">
       <div className="w-24 h-24 rounded-full absolute ml-5 -mt-14">
         {
          userDetails?.profileImage ? <img src={userDetails?.profileImage} alt="" /> :
          <img src={pp} alt="" />
         }
       </div>
     </div>
   </div>
   <div className=" mb-12  py-5 border border-gray-300 rounded-lg px-5">
     <p className="mb-1 text-2xl font-bold">{userDetails?.name}</p>
     {/* <p className="mb-7">{userDetails?.headline}</p> */}
     <div>
     {
      userDetails?.headline &&  <p className="mb-2">{userDetails?.headline}</p>
     }
     </div>
     <div className="flex mb-2">
      {
        userDetails?.city && <p className="mr-3">{userDetails?.city}</p>
      }
      {
        userDetails?.country && <p>{userDetails?.country}</p>
      }
     </div>
     <p className="mb-2 text-green-700 font-bold">
       {userDetails?.friends?.length}{" "}
       {userDetails?.friends?.length > 1 ? "connections" : "connection"}
     </p>
     <div className="my-5">
       <Link
         to={`/candidateresume/${userDetails?.email}`}
         className="btn btn-active  bg-green-700 text-white hover:bg-green-500"
       >
         <span className="mr-5">resume</span>{" "}
         <FaFileDownload className="text-2xl"></FaFileDownload>
       </Link>
       <Link to={`/contact/${userDetails._id}`}>
         <p className="btn btn-active  bg-green-700 text-white hover:bg-green-500 ml-5 ">
           contact{" "}
           <span className="ml-5 text-2xl">
             <FaRegEnvelope></FaRegEnvelope>
           </span>
         </p>
       </Link>
     </div>
   </div>
 </div>
<div className="border border-gray-300 py-5 rounded-lg pb-12">
<div className="mb-12">
  {
    userDetails?.about &&  <div>
    <p className="mx-5 text-2xl font-semibold">About</p>
    <p className="mt-3 mx-5">{userDetails.about}</p>
  </div>
  }
</div>
 {/* <div>
   {userDetails?.experiences &&
     userDetails?.experiences.map((experience, index) => (
       <div key={index}>
         <p className="mx-5 text-2xl font-semibold">{experience?.name}</p>
         <p className="my-5 mx-5">{userDetails?.about}</p>
       </div>
     ))}
 </div> */}
 <div className="mb-12">
  {
    userDetails?.school &&  <div>
    <p className="mx-5 text-2xl font-semibold">Education</p>
    <p className="my-2 mx-5">{userDetails?.school}</p>
    <p className="my-2 mx-5">{userDetails?.university}</p>
  </div>
  }
 </div>
 <div>
   {
     userDetails?.skills && (
       <div>
         <p className="mx-5 text-2xl font-semibold">Skills</p>
         <p className="mt-2 text-sm mx-5">{userDetails?.skills}</p>
       </div>
     )
     //      userDetails?.skills.map((skill, index) => <div className='shadow-xl'
     //         key={index}
     //      >
     //      <p className='mx-5 text-2xl font-semibold'>{skill?.name}</p>
     //      <p className='my-5 mx-5'>{userDetails?.about}</p>
     //  </div>)
   }
 </div>
 
 <div className="px-5  ">
  {
    userProjects?.length>0 && <div>
      <p className="text-2xl mt-12 font-semibold">Project</p>
      <div>
        {userProjects.map(project => <div className="my-5" key={project._id}>
                  {/* <h3 className="text-xl mb-2  font-extrabold">{project.projectName}</h3> */}
                  <p className="mb-2 font-semibold">{project.projectName}</p>
                  <p ><span>{project.startDate}</span> - <span>{project.endDate}</span></p>
                  <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/docs/flex-direction"><button  className="btn bg-green-700 hover:bg-green-500 my-3 text-white font-bold py-2 px-4 rounded"> Project <FaExternalLinkAlt className="ml-2"/></button></a>
                  <p>{project.projectDescription}</p>
                </div>)}
      </div>
    </div>
  }
</div>
</div>


</div>
    
  );
};

export default CandidateProfile;
