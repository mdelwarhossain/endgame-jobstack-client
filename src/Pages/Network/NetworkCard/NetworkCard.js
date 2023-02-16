import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../../Shared/LoadingPage/LoadingPage";

const NetworkCard = ({ dbuser, isLoading, refetch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useContext(AuthContext);
  const [userDetails,setUserDetails] = useState()
  

  useEffect(() =>{

    fetch(`http://localhost:5000/user/${user?.email}`)
    .then((res)=>{
        if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
    } )
    .then(data => setUserDetails(data))
  },[user?.email])

  console.log(userDetails)

  


  const handleConnect = (dbuser) => {
    const data = {
      filterEmail: dbuser?.email,
      filterEmail2: user?.email,
      received: {
        name: userDetails.name,
        email: user?.email,
        profileImage: userDetails?.profileImage
      },
      sent: {
        name: dbuser?.name,
        email: dbuser?.email
      },
    };

    // save connections to the database
    fetch("http://localhost:5000/connection", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch()
        console.log(result);
        toast.success(`Your request has been sent to ${dbuser?.name}`);
        
      });
  };

  

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="my-10">
      {/* <div className="pt-5 pb-5">
        <label className="label">
          {" "}
          <span className="label-text text-xl font-bold text-green-600">
            Search users here
          </span>
        </label>
        <input
          className="rounded-md input-bordered input-warning  w-3/4  px-6 text-gray-700 leading-tight focus:outline-none px-2 py-5"
          type="text"
          placeholder=""
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div> */}
      {/* <div> */}
      {/* {usersCollection
          .filter((dbuser) => {
            if (searchTerm == "") {
              return dbuser;
            } else if (
              dbuser.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return dbuser;
            }
          })
          .map((dbuser) => ( */}
      {/* <div className=" bg-base-100 shadow-xl h-72">
          <figure>
            <img className="w-full h-32" src={dbuser?.profileImage} alt="Img" />
          </figure>
          <div className=" my-4 ml-2">
            <h2 className="text-xl font-semibold text-cyan-900">{dbuser?.name}</h2>
            <p className="text-cyan-900">{dbuser?.headline}</p>
          </div>
          <div className="  flex justify-center ">
            {
              !dbuser?.sentStatus ?
                <p onClick={() => handleConnect(dbuser)} className="btn bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Connect</p>
                :
                <p className="btn bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded ">Request sent</p>
            }
          </div>
        </div></div> */}
      <div className='grid  place-items-center font-mono'>
        <div className="bg-amber-50 h-72 rounded-md shadow-2xl">
          <div className="flex justify-center items-center leading-none">
            <img
              src={dbuser?.profileImage}
              alt="pic"
              className="h-36 w-48 bg-blue-400  rounded-md shadow-xl mt-4 transform -translate-y-8 hover:-translate-y-2 transition duration-700" />
          </div>
          <div className="">
            <h1 className="block ml-2 mb-1 text-xl font-semibold  text-cyan-900"> {dbuser?.name}</h1>
            <p className="text-sm ml-2 my-2 font-semibold tracking-tighter  text-cyan-900">
              {dbuser?.headline}
            </p>
          </div>
          <div className="card-actions justify-center ">
            {
              dbuser?.requests?.includes(user?.email) ?
                
                <p className="bg-[#2E8B57] rounded  hover:bg-green-900 text-white font-bold btn-sm pt-1">Request sent</p>
                :
                <p onClick={() => handleConnect(dbuser)} className="rounded bg-[#2E8B57]  hover:bg-green-900 text-white font-bold btn-sm pt-1">Connect</p>
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetworkCard;