
import React, { useContext, useEffect, useState } from "react";

import Courses from "../NewsFeed/LeftSideCard/Courses/Courses";
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
import { InfoContext } from "../../contexts/UserInfoProvider";

import { GiCandlebright } from "react-icons/gi";

import pp from '../../assest/images/pp.jpg'
import cp from '../../assest/images/cp.jpg'


const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const { userDetails } = useContext(InfoContext);

  const [courses, setCourses] = useState([]);
  const [isCourseLoading, setIsCourseLoading] = useState(false);


  const [loading, setLoading] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState()
  const waitTime = 1000;

  useEffect(() => {
    setLoading(true)
    const id = setInterval(() => {

      fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setCurrentUserDetails(data)
          setLoading(false)
        })
    }, waitTime);
    return () => clearInterval(id);
  }, [user?.email]);

  console.log(userDetails);
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  console.log(jobs);

  useEffect(() => {
    setIsCourseLoading(true);
    fetch("http://localhost:5000/limitCourse")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsCourseLoading(false);
      });
  }, []);

  console.log(courses);

  const { data: singleUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  console.log(singleUser);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSignout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-2 mt-5">
        <div className="">

          {user && (

          <div className='my-5'>
            {
              loading ? <Loading></Loading> :

                <div className="max-w-xs drop-shadow-lg rounded-md shadow-md bg-lime-50  relative">
                  {
                    currentUserDetails?.bannerImage ? <img className="h-48" src={currentUserDetails.bannerImage} /> :
                      <img src={cp} alt="" className="object-cover h-48 object-center w-full rounded-t-md h-20 bg-gray-500" />
                  }
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    {
                      currentUserDetails?.profileImage ? <img alt="Profile" className="absolute top-36 left-2/4 -ml-8  w-16 h-16 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800" src={currentUserDetails.profileImage} /> :

                        <img alt="Profile" className="absolute top-36 left-2/4 -ml-8  w-16 h-16 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800" src={pp} />
                    }
                    <div className="space-y-2 text-center">
                      <Link to='/userProfile'><h2 className="text-sky-600 text-2xl font-semibold tracking-wide">{currentUserDetails?.name}</h2></Link>
                      <div>
                        {
                          currentUserDetails?.headline ? <p className="text-yellow-700 text-md">{currentUserDetails?.headline}</p> :

                            <p className="text-red-700 text-md">Add A Headline</p>
                        }
                      </div>
                    </div>
                    <hr />
                    <div className='hover:bg-gray-200 rounded-md'>
                      <Link to='#'>
                        <div>
                          <div className='flex items-center justify-between text-sm'>
                            <h3 className='text-cyan-900'>Connection</h3>
                            <p className='text-blue-400 font-bold'>21</p>
                          </div>
                          <h2 className='text-md font-bold text-cyan-900'>Grow Your Network</h2>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <p className='text-sm text-cyan-900'>Access exclusive tools & insights</p>
                    </div>
                  </div>
                </div>
            }
          </div>
          {/* {
            user &&

            <div className="flex gap-4 ml-2 mt-2">
              <img
                className="h-10 w-10 rounded-full"
                src={singleUser?.profileImage}
                alt=""
              />
              <span className="flex gap-2 mt-2"> {singleUser?.name}</span>

            </div>
          )}
          <div>

            </div>} */}
          <div className="flex flex-col gap-2 my-5">

            {/* <Link
              to={`/jobs/${user?.email}`}
              className="btn btn-outline btn-primary"
            >
              My Applications
            </Link> */}
        

            <div>
              <p className="font-extrabold shadow-lg rounded-md text-cyan-900 text-center py-2 text-xl mx-auto mb-2 bg-gradient-to-r from-green-300 to-blue-300 ">
                Popular Courses <GiCandlebright className="inline" />
              </p>

              {courses.map((course) => (
                <Courses
                  key={course._id}
                  course={course}
                  isCourseLoading={isCourseLoading}
                ></Courses>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 shadow-2xl mt-5">
        <div className="p-8 bg-slate-500">
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
        <div className="bg-slate-100">
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
      <div className="col-span-2 mt-5">
      <div  className="flex flex-col gap-2 my-5">
      <Link
              to={`/candidate/${singleUser?._id}`}
              className="btn btn-outline btn-primary shadow-md"
            >
              My Resume
            </Link>
            <Link
              to="/antifraudtips"
              className="btn btn-outline btn-primary shadow-md"
            >
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

        {/* limit courses */}
        <Courses></Courses>
        <Link to="/course"><button className="btn btn-outline btn-primary">See More</button></Link>


      </div>
    </div>
  );
};

export default Jobs;
