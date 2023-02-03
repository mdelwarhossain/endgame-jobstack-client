import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const NetworkCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useContext(AuthContext);
  const [usersCollection,setUsersCollection] = useState([])
  console.log(user);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     try {
  //       const res = await fetch("https://jobstack-server.vercel.app/users", {
  //       });
  //       const data = await res.json();
  //       console.log(data)
  //       return data;
  //     } catch (error) {}
  //   },
  // });
  useEffect(() =>{
    fetch('https://jobstack-server.vercel.app/users')
    .then(res => res.json())
    .then(data => setUsersCollection(data))
  },[])

console.log(usersCollection);
  const handleConnect = (dbuser) => {
    const data = {
       filterEmail: dbuser?.email,
       filterEmail2: user.email,
      received: {
        name: user.displayName,
        email: user.email,
        profileImage: user.profileImage
      },
      sent: {
        name: dbuser.name,
        email: dbuser.email
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
        console.log(result);
        toast.success(`Your request has been sent to ${dbuser?.name}`);
        // navigate('/posts')
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-5">
        {usersCollection
          .filter((dbuser) => {
            if (searchTerm == "") {
              return dbuser;
            } else if (
              dbuser.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return dbuser;
            }
          })
          .map((dbuser) => (
            <div key={dbuser?._id} className="my-5 bg-white shadow-xl rounded-lg">
              <figure>
                <img className="w-full h-40" src={dbuser?.image} alt="Shoes" />
                <hr />
              </figure>
              <div className="p-2 m-2">
                <h2 className="text-xl font-bold">{dbuser?.name}</h2>
                <p className="font-semibold text-sm">Mern Stack Developer</p>
                <p className="text-orange-600 text-sm">2 mutual connections</p>
                <button className="btn btn-sm mt-3">Click here</button>
              </div>
              <div className="flex justify-around mb-2">
                <p className="btn btn-outline btn-primary">Follow</p>
                <p onClick={() => handleConnect(dbuser)} className="btn btn-outline btn-primary">Connect</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NetworkCard;
