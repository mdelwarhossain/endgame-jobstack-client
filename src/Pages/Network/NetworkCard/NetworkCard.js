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

    fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
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
        name: userDetails?.name,
        email: user?.email,
        profileImage: userDetails?.profileImage
      },
      sent: {
        name: dbuser?.name,
        email: dbuser?.email
      },
    };

    // save connections to the database
    fetch("https://endgame-jobstack-server.vercel.app/connection", {
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


  console.log(dbuser)
  return (
    <div className="my-10">
      <div className='grid  place-items-center font-mono'>
        <div className="bg-amber-50 h-72 border border-gray-300 rounded-lg">
          <div className="flex justify-center items-center leading-none">
            <img
              src={dbuser?.profileImage}
              alt="pic"
              className="h-36 w-48 bg-blue-400  rounded-md shadow-xl mt-4 transform -translate-y-8 hover:-translate-y-2 transition duration-700" />
          </div>
          <div className="">
            <h1 style={{fontSize:"18px"}} className="block ml-2 mb-1  font-extrabold"> {dbuser?.name}</h1>
            <p className="text-sm ml-2 my-2 font-semibold tracking-tighter  ">
              {dbuser?.headline ? dbuser?.headline.slice(0,25)+'...' : dbuser?.role}
            </p>
          </div>
          <div className="card-actions justify-center ">
            {
              dbuser?.requests?.includes(user?.email) ?
                
                <p className="bg-[#2E8B57] rounded cursor-pointer  hover:bg-green-900 text-white font-bold btn-sm pt-1">Request sent</p>
                :
                <p onClick={() => handleConnect(dbuser)} className="rounded cursor-pointer bg-[#2E8B57]  hover:bg-green-900 text-white font-bold btn-sm pt-1">Connect</p>
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetworkCard;