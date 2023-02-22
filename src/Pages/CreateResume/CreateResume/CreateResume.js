import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaExternalLinkAlt, FaPen } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import UserProjects from "../../UserProfile/UserProjects/UserProjects";
import ResumeEducationModal from "./ResumeModal/ResumeEducationModal";
import ResumeJobModal from "./ResumeModal/ResumeJobModal";
import ResumeNameModal from "./ResumeModal/ResumeNameModal";
import ResumeProjectsModal from "./ResumeModal/ResumeProjectsModal";
import ResumeSkillsModal from "./ResumeModal/ResumeSkillsModal";

const CreateResume = () => {

  const { user } = useContext(AuthContext);
  const [resumeDetails, setResumeDetails] = useState()
  console.log(resumeDetails)


  const {
    data: userData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/resumeDetails/${user?.email}`
      );
      const data = await res.json();
      setResumeDetails(data);
      return data;
    },
  });

// console.log(resumeDetails)



  return (
    <div className="allContainer md:w-2/3 mx-auto my-10  mt-12">
      <h3 className="font-bold text-xl text-center">Resume</h3>
      <div className="flex  justify-between gap-5  my-12">
      <div>
        <div className="flex items-center gap-5">
        {/* <h3 className="text-xl font-bold">Maksudur Rahman Prio </h3> */}
        {
          resumeDetails?.name? <h3 className="text-xl font-bold">{resumeDetails?.name} </h3> :

          <h3 className="text-xl font-bold">Add name</h3>
        }
        <label htmlFor="resume-name-modal"><FaPen className="cursor-pointer"></FaPen></label>
        </div>
       {/* {
        resumeDetails?.resumeEmail?   <p><small>{resumeDetails?.resumeEmail}</small></p>:
        <p><small>Add Email</small></p>
       } */}
       <p><small>{user?.email}</small></p>
        {
          resumeDetails?.mobile? <p><small>{resumeDetails.mobile}</small></p>:
          <p><small>Add mobile Number</small></p>
        }
       {
        resumeDetails?.location?  <p><small>{resumeDetails?.location}</small></p> :
        <p><small>Add Location</small></p>
       }
      </div>
      <button className="btn bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded btn-sm">Download</button>
      <ResumeNameModal refetch={refetch} resumeDetails={resumeDetails}></ResumeNameModal>
      </div>

      <div className="my-5 ">
        <div className="flex justify-between items-center gap-5">
        <p className="font-bold">Education</p>
        <label htmlFor="resume-education-modal"><FaPen className="cursor-pointer"></FaPen></label>
        </div>
       <div>
        {
          resumeDetails?.school? <p><small>{resumeDetails?.school}</small></p>:
          <p><small>Add School</small></p>
        }
        {
          resumeDetails?.university? <p><small>{resumeDetails?.university}</small></p>:
          <p><small>Add University</small></p>
        }
       </div>
       
       <ResumeEducationModal refetch={refetch} resumeDetails={resumeDetails} ></ResumeEducationModal>
      </div>
      <div className="my-5 ">
        <div className="flex justify-between items-center gap-5">
        <p className="font-bold">Skills</p>
        <label htmlFor="resume-skills-modal"><FaPen className="cursor-pointer"></FaPen></label>
        </div>
       <div>
        {
          resumeDetails?.skills? <p><small>{resumeDetails?.skills}</small></p>:
          <p><small>Add Skills</small></p>
        }
       </div>
       
       <ResumeSkillsModal refetch={refetch} resumeDetails={resumeDetails} ></ResumeSkillsModal>
      </div>

      {/* projects */}

      <div className="my-5 ">
        <div className="flex justify-between items-center mb-3 gap-5">
        <p className="font-bold">Jobs</p>
        <label htmlFor="resume-job-modal"><FaPen className="cursor-pointer"></FaPen></label>
        </div>
       {/* <div>
        {
          resumeDetails?.skills? <p><small>{resumeDetails?.skills}</small></p>:
          <p><small>Add Skills</small></p>
        }
       </div> */}

       <div>
        {
          resumeDetails?.Job?.length === 0 ? "Add Job" :

          <div>
            {
              resumeDetails?.Job.map(j => <div className="mb-5">
                <p className="font-extrabold"><small>{j?.Organization}</small></p>
                <p><small>{j?.Role}</small></p>
                <p><small><span>{j?.startDate}</span> To <span>{j?.endDate}</span></small></p>
                <p><small>{j?.Location}</small></p>
              </div>)
            }
          </div>
        }
       </div>
       
       <ResumeJobModal refetch={refetch} resumeDetails={resumeDetails} ></ResumeJobModal>
      </div>

      {/* Projects */}
      

      <div className="my-5 ">
        <div className="flex justify-between items-center mb-3 gap-5">
        <p className="font-bold">Projects</p>
        <label htmlFor="resume-projects-modal"><FaPen className="cursor-pointer"></FaPen></label>
        </div>
       {/* <div>
        {
          resumeDetails?.skills? <p><small>{resumeDetails?.skills}</small></p>:
          <p><small>Add Skills</small></p>
        }
       </div> */}

       <div>
        {
          resumeDetails?.Projects?.length === 0 ? "Add Projects" :

          <div>
            {
              resumeDetails?.Projects.map(p =>  <div className="my-5">
              {/* <h3 className="text-xl mb-2  font-extrabold">{project.projectName}</h3> */}
              <p className="mb-2 font-extrabold"><small>{p?.projectName}</small></p>
              <p><small><span>{p?.startDate}</span> To <span>{p?.endDate}</span></small></p>
              <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/docs/flex-direction"><button  className="btn bg-green-700 hover:bg-green-500 my-3 text-white font-bold py-2 btn-sm px-4 rounded">Show Project <FaExternalLinkAlt className="ml-2"/></button></a>
              <p><small>{p?.projectDescription}</small></p>
            </div>)
            }
          </div>
        }
       </div>
       
       <ResumeProjectsModal refetch={refetch} resumeDetails={resumeDetails} ></ResumeProjectsModal>
      </div>
    </div>
  );
};

export default CreateResume;
