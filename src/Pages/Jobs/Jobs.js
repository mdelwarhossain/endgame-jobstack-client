import React, { useContext } from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/Courses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import hire from '../../assest/images/hire.jpg'
import JobModal from "./JobModal/JobModal";
import JobGuidence from "./JobGuidence/JobGuidence";
import JobCard from "./JobCard/JobCard";
import Loading from "../../Shared/LoadingPage/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Jobs = () => {
  const {user} = useContext(AuthContext); 
  const { data: jobs, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/jobs', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  });
  console.log(jobs);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-2 mt-5">
          <div className="">
            <div className='flex gap-4 ml-2 mt-2'>
              <img className='h-10 w-10 rounded-full' src={user?.image} alt="" />
              <span className='flex gap-2 mt-2'> {user?.displayName}</span>
            </div>
            <div className='flex flex-col gap-2 my-5'>
              <Link to={`/jobs/${user?.email}`} className='btn btn-outline btn-primary'>My Applications</Link>
              <Link to='' className='btn btn-outline btn-primary'>Edit Resume</Link>
              <Link to='' className='btn btn-outline btn-primary'>Anti Fraud Tips</Link>
              <Link to='' className='btn btn-outline btn-primary'>Manage Account</Link>
              <Link to='' className='btn btn-outline btn-primary'>LogOut</Link>

            </div>
          </div>
        </div>
      <div className="col-span-4 shadow-2xl my-5">
        {
          jobs?.map(job => <JobCard
            key={job._id}
            job={job}
          ></JobCard>)
        }
      </div>
      <div className="col-span-2">
        <JobGuidence></JobGuidence>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Jobs;
