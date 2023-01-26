import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const SkillsModal = ({ userDetails, userData, isLoading, refetch }) => {

    const userEmail = userData[0]?.email;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
  
      const handleInfoUpdate = (data) =>{
  
       const updatedInfo = {
        skills:data.skills
       }
       console.log(updatedInfo)
  
       fetch(`http://localhost:5000/usersQueryEmail?email=${userEmail}`, {
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
        <input type="checkbox" id="skills-modal" className="modal-toggle" />
  <div className="modal">
    <div className="modal-box relative">
      <label htmlFor="skills-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 className="text-lg font-bold text-center my-5">Add Your Skills</h3>
      {
              userDetails?.map((details) =>
              <form onSubmit={handleSubmit(handleInfoUpdate)}>
                  <textarea 
                  defaultValue={details.skills}
                  {...register("skills", {
                  })}
                  className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                  <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
              </form>)
            }
    </div>
  </div>
      </div>
    );
};

export default SkillsModal;