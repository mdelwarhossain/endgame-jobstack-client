import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const ResumeNameModal = ({resumeDetails,refetch}) => {

    const {user} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();



      const handleInfoUpdate = (data) =>{
  
        const updatedInfo = {
        //  location:data.location,
        //  city:data.city,
        //  country:data.country
        
        name:data.name,
        email:user?.email,
        mobile:data.mobile,
        location:data.location
        }
        console.log(updatedInfo)
   
        fetch(`http://localhost:5000/createResume`, {
               method: "POST",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(updatedInfo),
             })
               .then((res) => res.json())
               .then((data) => {
                console.log(data)
                 if (data.acknowledged) {
                //    refetch();
                   reset();
                   refetch()
                   toast.success("Info sent");
                 }
               });
           
   
       }


  return (
    <div>
      <input type="checkbox" id="resume-name-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="resume-name-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Give Your Information!
          </h3>
          <form onSubmit={handleSubmit(handleInfoUpdate)}>
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Name</span>
                </label>
                <input
                // defaultValue={userDetails?.country}
                  type="text"
                  {...register("name", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Email</span>
                </label>
                <input
                defaultValue={user?.email}
                disabled
                  type="email"
                  {...register("email", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Mobile</span>
                </label>
                <input
                // defaultValue={userDetails?.city}
                  type="text"
                  {...register("mobile", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Location</span>
                </label>
                <input
                // defaultValue={userDetails?.city}
                  type="text"
                  {...register("location", {
                  })}
                  className="input input-bordered w-full "
                />
                <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeNameModal;
