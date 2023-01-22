import React from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/Courses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import hire from '../../assest/images/hire.jpg'
import JobModal from "./JobModal/JobModal";
import JobGuidence from "./JobGuidence/JobGuidence";
import JobCard from "./JobCard/JobCard";
import Loading from "../../Shared/LoadingPage/LoadingPage";
import { useQuery } from "@tanstack/react-query";

const Jobs = () => {

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
      <div className="hidden  md:block col-span-2">
        {/* <LeftSideCard></LeftSideCard> */}
        <Courses></Courses>
        {/* <Sponsored></Sponsored> */}
      </div>
      <div className="col-span-4 shadow-2xl my-5">
        {
          jobs?.map(job => <JobCard
            key={job._id}
            job={job}
          ></JobCard>)
        }
      </div>
      <JobGuidence></JobGuidence>
    </div>
  );
};

export default Jobs;
