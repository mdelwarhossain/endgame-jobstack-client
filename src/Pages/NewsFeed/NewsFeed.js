import React, { useEffect, useState } from "react";
import Courses from "./LeftSideCard/Courses/LimitCourses";
import CreatePost from "./CreatePost/CreatePost";
import LeftSideCard from "./LeftSideCard/LeftSideCard";
import Sponsored from "./LeftSideCard/Sponsored/Sponsored";
import './NewsFeed.css'
import RealPost from "./RealPost/RealPost";
import RightSideCard from "./RightSideCard/RightSideCard";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";


const NewsFeed = () => {
  

  return (
    <div className="newsFeed  allContainer px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="hidden  md:block col-span-2">
        <LeftSideCard ></LeftSideCard>
      </div>
      <div className="col-span-4 shadow-2xl">
        {/* <CreatePost></CreatePost> */}
        <RealPost></RealPost>
      </div>
      <div className="hidden  p-1  md:block col-span-2">
        <RightSideCard></RightSideCard>
      </div>
    </div>
  );
};

export default NewsFeed;
