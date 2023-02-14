import React from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/LimitCourses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import RightSideCard from "../NewsFeed/RightSideCard/RightSideCard";
import HiringBanner from "./HiringBanner/HiringBanner";
import "./UserProfile.css";
import UserProfileInfo from "./UserProfileInfo";

const UserProfile = () => {
  return (
    <div  className="newsFeed allContainer px-4  grid grid-cols-1 md:grid-cols-8 gap-2 ">
      <div className="hidden shadow-xl  mt-5 md:block col-span-2">
        <HiringBanner></HiringBanner>
      </div>
      <div className="col-span-4 " >
        <UserProfileInfo></UserProfileInfo>
      </div>
      <div className="hidden p-1 shadow-xl md:block col-span-2 ">
        <RightSideCard></RightSideCard>
      </div>
    </div>
  );
};

export default UserProfile;
