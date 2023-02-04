import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EducationModal = ({ userDetails, userData, isLoading, refetch }) => {

    const userEmail = userDetails?.email;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
  
      const handleInfoUpdate = (data) =>{
  
       const updatedInfo = {
        school:data.school,
        university:data.university,
       }
       console.log(updatedInfo)
  
       fetch(`http://localhost:5000/user/${userEmail}`, {
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
        <div>
      <input type="checkbox" id="education-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="education-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center my-5">Add Your Educational Institute</h3>
    <form onSubmit={handleSubmit(handleInfoUpdate)}>
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">School/College</span>
                </label>
                <input
                defaultValue={userDetails?.school}
                  type="text"
                  {...register("school", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">University</span>
                </label>
                <input
                defaultValue={userDetails?.university}
                  type="text"
                  {...register("university", {
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

export default EducationModal;