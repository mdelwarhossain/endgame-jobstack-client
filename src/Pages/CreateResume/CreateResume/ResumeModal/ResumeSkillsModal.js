import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ResumeSkillsModal = ({refetch,resumeDetails}) => {

    const {user} = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

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
  
       fetch(`http://localhost:5000/resumeDetails/${user?.email}`, {
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
                  toast.success("Skills Updated");
                  setIsModalOpen(false); // Close the modal
                }
              });
          
  
      }
    return (
        <div>
        <input type="checkbox" id="resume-skills-modal" className="modal-toggle" checked={isModalOpen} onChange={() => setIsModalOpen(!isModalOpen)} />
  <div className="modal">
    <div className="modal-box relative">
      <label htmlFor="resume-skills-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 className="text-lg font-bold text-center my-5">Add Your Skills</h3>
      <form onSubmit={handleSubmit(handleInfoUpdate)}>
                  <textarea 
                  defaultValue={resumeDetails?.skills}
                  {...register("skills", {
                  })}
                  className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                  <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
              </form>
    </div>
  </div>
      </div>
    );
};

export default ResumeSkillsModal;
