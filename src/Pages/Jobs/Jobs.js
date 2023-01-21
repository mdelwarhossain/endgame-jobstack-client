import React from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/Courses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import hire from '../../assest/images/hire.jpg'
import JobModal from "./JobModal/JobModal";
import JobGuidence from "./JobGuidence/JobGuidence";
import JobCard from "./JobCard/JobCard";

const Jobs = () => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="hidden  md:block col-span-2">
        {/* <LeftSideCard></LeftSideCard> */}
        <Courses></Courses>
        {/* <Sponsored></Sponsored> */}
      </div>
      <div className="col-span-4 shadow-2xl mt-10">
        <JobCard></JobCard>
      </div>
      <JobGuidence></JobGuidence>
    </div>
  );
};

export default Jobs;
