import React from 'react';
import { BsArrowRightSquareFill } from "react-icons/bs";
import resumeImg from "../../../assest/images/resume.png"
import { Link } from 'react-router-dom';

const JobGuidence = () => {
    return (
        <div className="hidden p-4 my-5 shadow-xl md:block col-span-2">
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
    );
};

export default JobGuidence;