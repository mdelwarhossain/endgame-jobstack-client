import React from "react";
import { Link } from "react-router-dom";
import resumeImg from "../../assest/images/resume.png";
import Courses from "../NewsFeed/LeftSideCard/Courses/Courses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import { BsArrowRightSquareFill } from "react-icons/bs";
import hire from '../../assest/images/hire.jpg'
import JobModal from "./JobModal/JobModal";

const Jobs = () => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
      <div className="hidden  md:block col-span-2">
        <LeftSideCard></LeftSideCard>
        <Courses></Courses>
        <Sponsored></Sponsored>
      </div>
      <div className="col-span-4 shadow-2xl">
        <img src={hire} className="rounded-lg" alt="" />
         <div className="text-center mt-5">
         <label htmlFor="my-modal-3" className=" btn  btn-outline btn-info">
         Post a Free Job
            </label>
         </div>
         <JobModal></JobModal>
      </div>
      <div className="hidden p-1 my-5 shadow-xl md:block col-span-2">
        <h3 className="text-2xl font-bold">Job seeker guidance</h3>
        <p className="mt-2">Recommended based on your activity</p>
        <div className="my-5">
          <Link className="justify-between">
            <p className="underline mb-2">I want to improve my resume</p>
            <img src={resumeImg} alt="" />
          </Link>
        </div>
        <p className="mb-3">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <Link>
          <p className="font-bold">
            Show More <BsArrowRightSquareFill className="inline" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
