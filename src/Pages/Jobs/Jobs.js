import React, { useContext, useEffect, useState } from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/LimitCourses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import hire from "../../assest/images/hire.jpg";
import JobModal from "./JobModal/JobModal";
import JobGuidence from "./JobGuidence/JobGuidence";
import JobCard from "./JobCard/JobCard";
import Loading from "../../Shared/LoadingPage/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GiCandlebright } from "react-icons/gi";
import LimitCourses from "../NewsFeed/LeftSideCard/Courses/LimitCourses";
import CardLoader from "../../Shared/LoadingPage/CardLoader/CardLoader";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const [limitCourse,setLimitCourse] = useState([])
  // console.log(userDetails);
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        const res = await fetch("https://endgame-jobstack-server.vercel.app/jobs", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) { }
    },
  });
  // console.log(jobs);

  useEffect(() =>{
    fetch('https://endgame-jobstack-server.vercel.app/limitCourse')
    .then(res => res.json())
    .then(data => setLimitCourse(data))
  },[])

  const { data: singleUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const res = await fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`, {
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
  // console.log(singleUser);

  if (isLoading) {
    return <CardLoader></CardLoader>
  }

  const handleSignout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-4 allContainer grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-2 mt-5">
        <div className="">
          {/* {
            user &&
            <div className="flex gap-4 ml-2 mt-2">
              <img className="h-10 w-10 rounded-full" src={singleUser?.profileImage} alt="" />
              <span className="flex gap-2 mt-2"> {singleUser?.name}</span>
            </div>} */}
          <div>
           
             <p className="font-extrabold shadow-lg rounded-md text-cyan-900 text-center py-2 text-xl mx-auto mb-2 bg-gradient-to-r from-green-300 to-blue-300 ">
                Popular Courses <GiCandlebright className="inline" />
              </p>
           <div>
            {
              limitCourse.map(course =><LimitCourses
              key={course._id}
              course={course}
              ></LimitCourses>)
            }
           </div>
            
          </div>
        </div>
      </div>
      <div className="col-span-4 shadow-2xl my-5">
        <div className="p-8 bg-green-700">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold text-white">
              Search your desire job here...
            </span>
          </label>
          <input
            className="rounded-md  w-full  px-6 text-gray-700 leading-tight focus:outline-none px-2 py-5 mx-auto"
            type="text"
            placeholder="Search your desire job here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        {/* {jobs?.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))} */}
        <div>
          {jobs
            .filter((job) => {
              if (searchTerm == "") {
                return job;
              } else if (
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.location.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return job;
              }
            })
            .map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </div>
      <div className="col-span-2">
      <div  className="flex flex-col gap-2 my-5">
      <Link to={`/candidate/${singleUser?._id}`} className="btn btn-outline btn-primary shadow-md">
              My Resume
            </Link>
            <Link to="/antifraudtips" className="btn btn-outline btn-primary shadow-md">
              Anti Fraud Tips
            </Link>
            <Link
              onClick={handleSignout}
              to=""
              className="btn btn-outline btn-primary shadow-md"
            >
              LogOut
            </Link>
      </div>
        <JobGuidence></JobGuidence>
        
      </div>
    </div>
  );
};

export default Jobs;