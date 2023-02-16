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
import LoadingPage from "../../Shared/LoadingPage/LoadingPage";
import CardLoader from "../../Shared/LoadingPage/CardLoader/CardLoader";
import PostDetails from "./MyProfile/PostDetails";

const UserProfileInfo = () => {
  const [userDetails, setUserDetails] = useState();
  const [myPost, setMyPost] = useState([]);
  const [postDetails,setPostDetails]=useState(null)

  const { user } = useContext(AuthContext);
  console.log(user.email);

  const {
    data: userData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://endgame-jobstack-server.vercel.app/user/${user?.email}`
      );
      const data = await res.json();
      setUserDetails(data);
      // console.log(data);
      return data;
    },
  });

  // console.log();

  // getting my post

  const {
    data: postData = [],
    refetchPost,
    isMyPostLoading,
  } = useQuery({
    queryKey: ["postData", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://endgame-jobstack-server.vercel.app/myPost/${user?.email}`);
      const data = await res.json();
      setMyPost(data);
      return data;
    },
  });



  // console.log(myPost)

  return (
    <div className="my-5 ">
      {isLoading ? (
        <CardLoader></CardLoader>
      ) : (
        <div className="max-w-full rounded-md relative">
          <div className="relative border-l border-r border-t border-gray-300 rounded-lg">
            {userDetails?.bannerImage ? (
              <img
                src={userDetails.bannerImage}
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

          <div className="flex flex-col  justify-between  space-y-8">
            <label htmlFor="pro-img-modal">
              {userDetails?.profileImage ? (
                <img
                  alt="Profile"
                  className="absolute top-32 left-20 -ml-8  w-32 h-32 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800 cursor-pointer"
                  src={userDetails.profileImage}
                />
              ) : (
                <img
                  alt="Profile"
                  className="absolute top-32 left-20 -ml-8  w-32 h-32 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800 cursor-pointer"
                  src={pp}
                />
              )}
            </label>
            <ProImgModal
              userData={userData}
              userDetails={userDetails}
              refetch={refetch}
              isLoading={isLoading}
            ></ProImgModal>

            <div className="border-l border-r p-5 border-b border-gray-300 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold tracking-wide">
                    {userDetails?.name}
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
                  {userDetails?.headline
                    ? userDetails.headline
                    : "Add a headline"}
                </p>
              </div>
              <hr className="mt-4" />
              <div className="">
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
                  {userDetails?.city || userDetails?.country ? (
                    <p className="text-sm">
                      <span>{userDetails.city}</span>{" "}
                      <span>{userDetails.country}</span>
                    </p>
                  ) : (
                    <p>Add Your Location</p>
                  )}
                </div>

                <label htmlFor="location-modal">
                  <FaPen className="cursor-pointer"></FaPen>
                </label>
              </div>
              <LocationEditModal
                userData={userData}
                userDetails={userDetails}
                refetch={refetch}
                isLoading={isLoading}
              ></LocationEditModal>
            </div>

            {/* get about */}

            {/* myPost */}
            <div className="p-6 border border-gray-300 rounded-lg">
              <h3 className="text-2xl  font-bold mb-3">Activity</h3>
              {/* <MyPost></MyPost> */}
              {myPost.length > 0 ? (
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                  {myPost.map((mp) => (
                  <div  key={mp._id} className="flex  py-5 justify-between  items-center">
                  <img
                    src={mp?.image}
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div>
                    <p>{mp?.status.slice(0, 8)}...</p>
                    <label onClick={() => setPostDetails(mp)}  htmlFor="details" className="btn mt-2 btn-outline btn-info btn-sm">See More</label>
                  </div> 
                </div>
                  ))}
                  <PostDetails postDetails={postDetails} ></PostDetails>
                </div>
                
              ) : (
                <div>
                  <Link to='/newsfeed'><p className="hover:underline">Share Your First Post</p></Link>
                </div>
              )}
            </div>
            {/* about */}
            <div className="border border-gray-300 rounded-lg">
            <div>
              <div className="mt-6 flex justify-between p-6">
                <div>
                  <h2 className="text-2xl font-bold">About</h2>
                  <p className="mt-3">
                    {userDetails?.about ? userDetails.about : "Add Your About"}
                  </p>
                </div>
                <label htmlFor="about-modal">
                  <FaPen className="cursor-pointer"></FaPen>
                </label>
              </div>
              <AboutModal
                userData={userData}
                userDetails={userDetails}
                refetch={refetch}
                isLoading={isLoading}
              ></AboutModal>
            </div>

            {/* Your Education */}
            <div>
              <div className="mt-6 flex justify-between p-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Education</h2>
                  <p>
                    {userDetails?.school ? userDetails.school : "Add school"}
                  </p>
                  <p>
                    {userDetails?.university
                      ? userDetails.university
                      : "Add University"}
                  </p>
                </div>
                <label htmlFor="education-modal">
                  <FaPen className="cursor-pointer"></FaPen>
                </label>
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
              <div className="mt-6  flex justify-between p-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Skills</h2>
                  <p>
                    {userDetails?.skills
                      ? userDetails.skills
                      : "Add Your Skills"}
                  </p>
                </div>
                <label htmlFor="skills-modal">
                  <FaPen className="cursor-pointer"></FaPen>
                </label>
              </div>
              <SkillsModal
                userData={userData}
                userDetails={userDetails}
                refetch={refetch}
                isLoading={isLoading}
              ></SkillsModal>
            </div>

            {/* Your Best Projects */}

            <div>
              <DisplayProjects></DisplayProjects>
            </div>
            </div>
            {/* projects */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileInfo;
