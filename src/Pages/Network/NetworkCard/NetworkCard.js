import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const NetworkCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  console.log(data);

  const handleConnect = (dbuser) => {
    const connection = {
      name: dbuser?.name,
      email: user?.email,
      url: dbuser?.image,
      connectedOn: new Date(),
    };

    // save connections to the database
    fetch("http://localhost:5000/connection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(connection),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Your are following ${user?.name}`);
        // navigate('/posts')
      });
  };

  return (
    <div>
      <div className="pt-5 pb-5">
        <label className="label">
          {" "}
          <span className="label-text text-xl font-bold text-green-600">
            Search users here
          </span>
        </label>
        <input
          className="rounded-md  w-3/4  px-6 text-gray-700 leading-tight focus:outline-none px-2 py-5"
          type="text"
          placeholder=""
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mr-5">
        {data
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
            <div key={dbuser?._id} className="my-5 bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-32" src={dbuser?.image} alt="Shoes" />
              </figure>
              <div className="p-2 m-2">
                <h2 className="text-xl font-semibold">{dbuser?.name}</h2>
                <p>Mern Stack Developer</p>
                <p className="text-green-600">2 mutual connections</p>
                <button
                  onClick={() => handleConnect(dbuser)}
                  className="btn btn-outline btn-primary w-full"
                >
                  Connect
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NetworkCard;
