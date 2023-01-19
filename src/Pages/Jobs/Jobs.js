import React from 'react';
import { Link } from 'react-router-dom';
import resumeImg from '../../assest/images/resume.png'
import Courses from '../NewsFeed/LeftSideCard/Courses/Courses';
import LeftSideCard from '../NewsFeed/LeftSideCard/LeftSideCard';
import Sponsored from '../NewsFeed/LeftSideCard/Sponsored/Sponsored';

const Jobs = () => {
    return (
        <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
      <div className="hidden shadow-xl md:block col-span-2">
        <LeftSideCard></LeftSideCard>
        <Courses></Courses>
        <Sponsored></Sponsored>
      </div>
      <div className="col-span-4">
        <h1>Jobs post</h1>
      </div>
      <div className="hidden p-1 my-5 shadow-xl md:block col-span-2">
        <h3 className="text-2xl font-bold">Job seeker guidance</h3>
        <p>Recommended based on your activity</p>
        <div className="my-5">
          <Link className="justify-between">
            <p className="underline ">I want to improve my resume</p>
            <img src={resumeImg} alt="" />
          </Link>
        </div>
        <p>
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <p>Show More</p>
      </div>
    </div>
    );
};

export default Jobs;