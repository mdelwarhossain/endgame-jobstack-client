import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { InfoContext } from "../../../contexts/UserInfoProvider";
import Loading from "../../../Shared/LoadingPage/LoadingPage";

const NetworkCard = ({dbuser, isLoading, refetch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useContext(AuthContext);
  const { userDetails } = useContext(InfoContext);
  console.log(userDetails);
  
  // const [usersCollection,setUsersCollection] = useState([])
  console.log(user);
  
  // useEffect(() =>{
  //   fetch('http://localhost:5000/users')
  //   .then(res => res.json())
  //   .then(data => setUsersCollection(data))
  // },[])


  const handleConnect = (dbuser) => {
    const data = {
       filterEmail: dbuser?.email,
       filterEmail2: user?.email,
      received: {
        name: user?.displayName,
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
    //     const sentEmail = dbuser?.email; 
    //     // save sent status to the database
    // fetch("http://localhost:5000/sentstatus", {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(sentEmail),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
    //     toast.success(`Your request has been sent to ${dbuser?.name}`);
    //     // navigate('/posts')
      });
  };

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:5000/delete/${id}`, {
  //     method: "delete",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       toast.success('deleted');
  //       // navigate('/posts')
  //     });
  // }

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
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
      <div>
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
            <div className="my-5 bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-32" src={dbuser?.profileImage} alt="Shoes" />
              </figure>
              <div className="p-2 m-2">
                <h2 className="text-xl font-semibold">{dbuser?.name}</h2>
                <p>Mern Stack Developer</p>
              </div>
              <div className="flex justify-center mb-2">
                {
                  !dbuser?.sentStatus ?
                  <p onClick={() => handleConnect(dbuser)} className="btn btn-outline btn-primary my-5">Connect</p>
                : 
                <p className="btn btn-outline btn-primary my-5">Request sent</p>
                }
              </div>
            </div>
      </div>
    </div>
  );
};

export default NetworkCard;
