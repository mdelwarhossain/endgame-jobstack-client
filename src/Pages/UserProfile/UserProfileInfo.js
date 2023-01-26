import React, { useContext, useState } from "react";
import { FaEdit, FaPen } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerModal from "./BannerModal/BannerModal";
import { useQuery } from "@tanstack/react-query";
import ProfileEditModal from "./ProfileEditModal/ProfileEditModal";
import { AuthContext } from "../../contexts/AuthProvider";
import pp from "../../assest/images/pp.jpg";
import cp from "../../assest/images/cp.jpg";
import ProImgModal from "./ProImgModal/ProImgModal";
import LocationEditModal from "./LocationEditModal.js/LocationEditModal";
import AboutModal from "./AboutModal/AboutModal";
import EducationModal from "./EducationModal/EducationModal";
import SkillsModal from "./SkillsModal/SkillsModal";
import UserProjects from "./UserProjects/UserProjects";
import DisplayProjects from "./DisplayProjects/DisplayProjects";

const UserProfileInfo = () => {
  const [userDetails, setUserDetails] = useState();
  // const [projects, setProjects] = useState()
  

  const { user } = useContext(AuthContext);
  // console.log(user)
  const {
    data: userData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/usersQueryEmail?email=${user?.email}`
      );
      const data = await res.json();
      setUserDetails(data);
      console.log(data);
      return data;
    },
  });




  return (
    <div className="my-5 py-10">
      {userDetails?.map((currentDetails) => (
        <div
          key={currentDetails._id}
          className="max-w-full rounded-md bg-gray-200 relative"
        >
          <div className="relative">
            {currentDetails?.bannerImage ? (
              <img
                src={currentDetails.bannerImage}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500 cursor-pointer"
              />
            ) : (
              <img
                src={cp}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500 cursor-pointer"
              />
            )}
            {/* User Backgroud Modal */}
            <label htmlFor="banner-modal">
              <span className="absolute top-5 right-5 text-indigo-600 bg-slate-100 rounded-full p-1 cursor-pointer">
                <FaPen />
              </span>
            </label>
            <BannerModal
              userData={userData}
              userDetails={userDetails}
              refetch={refetch}
              isLoading={isLoading}
            ></BannerModal>

            {/* basic modal user background */}
          </div>

          <div className="flex flex-col justify-between p-6 space-y-8">

            <label htmlFor="pro-img-modal">
              {
                currentDetails?.profileImage ? <img
                alt="Profile"
                className="absolute top-32 left-20 -ml-8  w-32 h-32 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800 cursor-pointer"
                src={currentDetails.profileImage}
              /> :

              <img
                alt="Profile"
                className="absolute top-32 left-20 -ml-8  w-32 h-32 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800 cursor-pointer"
                src={pp}
              />
              }
            </label>
            <ProImgModal
             userData={userData}
             userDetails={userDetails}
             refetch={refetch}
             isLoading={isLoading}
            ></ProImgModal>

            <div className="shadow-lg p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold tracking-wide">
                    {currentDetails.name}
                  </h2>
                  <label htmlFor="my-modal-3">
                    <FaEdit className="text-2xl cursor-pointer" />
                  </label>
                  <ProfileEditModal
                   userData={userData}
                   userDetails={userDetails}
                   refetch={refetch}
                   isLoading={isLoading}
                  ></ProfileEditModal>
                  {/* <label htmlFor="my-modal-3" className=""><FaEdit className="text-2xl cursor-pointer" /></label> */}
                </div>
                <p className="text-md">
                 {
                  currentDetails?.headline ? currentDetails.headline : "Add a headline"
                 }
                </p>
              </div>
              <hr className="mt-4" />
              <div className=" hover:bg-gray-200">
                <Link to="#">
                  <div className="my-6">
                    <div className="flex items-center justify-between text-sm">
                      <h3>Connection</h3>
                      <p className="text-blue-400 font-bold">21</p>
                    </div>
                    <h2 className="text-md font-bold">Grow Your Network</h2>
                  </div>
                </Link>
              </div>
              {/* Your Address */}
              <div className="flex justify-between">
                <div>
                {
                  currentDetails?.city|| currentDetails.country ? <p className="text-sm">
                  <span>{currentDetails.city}</span> <span>{currentDetails.country}</span>
                </p> : 
                <p>Add Your Location</p>
                }
                </div>
                
                <label htmlFor="location-modal"><FaPen className="cursor-pointer"></FaPen></label>
              </div>
              <LocationEditModal 
              userData={userData}
              userDetails={userDetails}
              refetch={refetch}
              isLoading={isLoading}
              ></LocationEditModal>
            </div>

            {/* get about */}
            <hr />
            <div>
            <div className="mt-6 flex justify-between shadow-lg p-6">
              <div>
              <h2 className="text-2xl font-bold">About</h2>
              <p className="mt-3">
              {currentDetails?.about ? currentDetails.about : "Add Your About"}
              </p>
              </div>
              <label htmlFor="about-modal"><FaPen className="cursor-pointer"></FaPen></label>
            </div>
            <AboutModal
            userData={userData}
            userDetails={userDetails}
            refetch={refetch}
            isLoading={isLoading}
            ></AboutModal>
            </div>
            <hr />

            {/* Your Education */}
            <div>
            <div className="mt-6 flex justify-between shadow-lg p-6">
              <div>
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              <p>
                {currentDetails?.school ? currentDetails.school : "Add school"}
              </p>
              <p>
                {currentDetails?.university ? currentDetails.university : "Add University"}
              </p>
              </div>
              <label htmlFor="education-modal"><FaPen className="cursor-pointer"></FaPen></label>
            </div>
            <EducationModal
            userData={userData}
            userDetails={userDetails}
            refetch={refetch}
            isLoading={isLoading}
            ></EducationModal>
            </div>

            {/* Your Skills */}
            <div>
            <div className="mt-6 shadow-lg flex justify-between p-6">
              <div>
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <p>
              {currentDetails?.skills ? currentDetails.skills : "Add Your Skills"}
              </p>
              </div>
              <label htmlFor="skills-modal"><FaPen className="cursor-pointer"></FaPen></label>
            </div>
            <SkillsModal
             userData={userData}
             userDetails={userDetails}
             refetch={refetch}
             isLoading={isLoading}
            ></SkillsModal>
            </div>

            {/* Your Best Projects */}
            <DisplayProjects></DisplayProjects>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfileInfo;
