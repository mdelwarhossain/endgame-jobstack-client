import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProfileEditModal = ({ userDetails, userData, isLoading, refetch }) => {
  console.log(userData)
  const userEmail = userDetails?.email;
    // console.log(user)

    //modal submit button

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const handleInfoUpdate = (data) =>{

     const updatedInfo = {
      name:data.name,
      headline: data.headline,
     }
    //  console.log(updatedInfo)

     fetch(`https://endgame-jobstack-server.vercel.app/user/${userEmail}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                refetch();
                reset();
                toast.success("Profile Updated");
              }
            });
        

    }
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           Edit Your Profile
          </h3>
          <form onSubmit={handleSubmit(handleInfoUpdate)}>
            <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Full Name</span>
                </label>
                <input
                defaultValue={userDetails?.name}
                  type="text"
                  {...register("name", {
                  })}
                  className="input input-bordered w-full "
                />
            {/* <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Last Name</span>
                </label>
                <input
                defaultValue={details.lastName}
                  type="text"
                  {...register("lastName", {
                  })}
                  className="input input-bordered w-full"
                /> */}
            <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Headline</span>
                </label>
                <input
                defaultValue={userDetails?.headline}
                  type="text"
                  {...register("headline", {
                  })}
                  className="input input-bordered w-full"
                />
                <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
            </form>
          
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;
