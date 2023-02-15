import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Recruiter = () => {
  const url = `https://endgame-jobstack-server.vercel.app/users`;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const recruiters = useLoaderData();
  const [displayrecruiters, setDisplayrecruiters] = useState(recruiters);

  const handleMakeAdmin = (id) => {
    fetch(`https://endgame-jobstack-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`admin created successfully `);
          refetch();
        }
        console.log(data);
      });
  };
  const handleDelete = (id) => {
    fetch(`https://keyboard-warrior-server.vercel.app/deleteusers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingUsers = displayrecruiters.filter(
            (buy) => buy._id !== id
          );
          setDisplayrecruiters(remainingUsers);
          toast.success(`user deleted `);
        }
      });
  };

  return (
    <div>
      <div>
        <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
          all Sellers
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {displayrecruiters.map((recruiter, index) => (
                <tr key={recruiter._id}>
                  <th>{index + 1}</th>
                  <td>{recruiter.name}</td>
                  <td>{recruiter.email}</td>
                  <td>
                    {displayrecruiters?.rol !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(recruiter._id)}
                        className="btn btn-sm bg-green-600 text-white"
                      >
                        Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(recruiter._id)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;