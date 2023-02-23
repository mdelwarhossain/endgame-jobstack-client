import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../../Shared/LoadingPage/LoadingPage";
import Candidate from "./Candidate/Candidate";
import pp from "../../assest/images/pp.jpg";
import cp from "../../assest/images/cp.jpg";
import CardLoader from "../../Shared/LoadingPage/CardLoader/CardLoader";

const Hire = () => {
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const { data = [], isLoading } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://endgame-jobstack-server.vercel.app/alluser",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const { data: singleUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://endgame-jobstack-server.vercel.app/user/${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  // console.log(data);

  if (isLoading) {
    return <CardLoader></CardLoader>;
  }
  console.log(searchTerm);
  return (
    <div className="px-4 allContainer grid grid-cols-1 md:grid-cols-8 gap-4  ">
      <div className="col-span-2 ">
        <div className="">
          {/* <div className='flex gap-4 ml-2 mt-2'>
                        <img className='h-10 w-10 rounded-full' src={singleUser?.profileImage} alt="" />
                        <span className='flex gap-2 mt-2'> {singleUser?.name}</span>
                    </div> */}
          <div className="flex flex-col gap-2 my-5">
            <Link
              to={`/jobs/${user?.email}`}
              className="btn btn-outline btn-primary shadow-md"
            >
              My Posts
            </Link>
            <Link
              to="/addajob"
              className="btn btn-outline btn-primary shadow-md"
            >
              Add a job
            </Link>
          </div>
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold text-green-500">
              Search your desire candidates
            </span>
          </label>
          <input
            className="rounded-md  w-full  px-6 text-gray-700 leading-tight focus:outline-none  py-5 mx-auto mt-2"
            type="text"
            placeholder="Search your desire candidates here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="col-span-6  py-2 rounded-2xl drop-shadow-xl bg-slate-100 ">
        {data
          .filter((candidates) => {
            if (searchTerm == "") {
              console.log(candidates.name);
              return candidates;
            } else if (
              (candidates?.name &&
                candidates.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())) ||
              (candidates?.headline &&
                candidates.headline
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())) ||
              (candidates?.skills &&
                candidates.skills
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()))
            ) {
              return candidates;
            }
          })
          .map((candidate) => (
            <Candidate key={candidate._id} candidate={candidate}></Candidate>
          ))}
        {/* {data
          .filter((candidates) => {
            if (searchTerm == "") {
              return candidates;
            } else if (
              candidates.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              candidates.headline
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              candidates.skills.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return candidates;
            }
          })
          .map((candidate) => (
            <Candidate key={candidate._id} candidate={candidate}></Candidate>
          ))} */}
      </div>
    </div>
  );
};

export default Hire;
