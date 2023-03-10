import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LocationEditModal = ({ userDetails, userData, isLoading, refetch }) => {
    const userEmail = userDetails?.email;

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
      setModalOpen(false);
    };
  
    const handleFormSubmit = () => {
      handleModalClose();
      // Handle form submission logic here
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
  
      const handleInfoUpdate = (data) =>{
  
       const updatedInfo = {
        location:data.location,
        city:data.city,
        country:data.country
       }
       console.log(updatedInfo)
  
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
                  handleFormSubmit()
                  reset();
                  toast.success("Profile Updated");
                }
              });
          
  
      }
  return (
    <div>
      <input type="checkbox" id="location-modal" checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)} className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="location-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center my-5">Add Your Location</h3>
    <form onSubmit={handleSubmit(handleInfoUpdate)}>
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Country/Region</span>
                </label>
                <input
                defaultValue={userDetails?.country}
                  type="text"
                  {...register("country", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">City</span>
                </label>
                <input
                defaultValue={userDetails?.city}
                  type="text"
                  {...register("city", {
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

export default LocationEditModal;
