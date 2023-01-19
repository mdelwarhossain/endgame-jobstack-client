import React from "react";
import Courses from "./LeftSideCard/Courses/Courses";
import CreatePost from "./CreatePost/CreatePost";
import LeftSideCard from "./LeftSideCard/LeftSideCard";
import Sponsored from "./LeftSideCard/Sponsored/Sponsored";
// import './NewsFeed.css'
import RealPost from "./RealPost/RealPost";
import RightSideCard from "./RightSideCard/RightSideCard";

const NewsFeed = () => {
  return (
    <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
      <div className="hidden shadow-xl md:block col-span-2">
        <LeftSideCard></LeftSideCard>
        <Courses></Courses>
        <Sponsored></Sponsored>
      </div>
      <div className="col-span-4">
        <CreatePost></CreatePost>
        <RealPost></RealPost>
      </div>
      <div className="hidden p-1 shadow-xl md:block col-span-2">
        <RightSideCard></RightSideCard>
      </div>
    </div>
  );
};

export default NewsFeed;
