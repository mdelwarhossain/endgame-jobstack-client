import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ResumeEducationModal = ({resumeDetails,refetch}) => {

    const {user} = useContext(AuthContext)

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
                  toast.success("Info Added");
                }
              });
          
  
      }
      
    return (
        <div>
            <input type="checkbox" id="resume-education-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="resume-education-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center my-5">Add Your Educational Institute</h3>
                    <form onSubmit={handleSubmit(handleInfoUpdate)}>
                        <label className="label">
                            <span className="label-text font-extrabold">School/College</span>
                        </label>
                        <input
                            defaultValue={resumeDetails?.school}
                            type="text"
                            {...register("school")}
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            <span className="label-text font-extrabold">University</span>
                        </label>
                        <input
                            defaultValue={resumeDetails?.university}
                            type="text"
                            {...register("university")}
                            className="input input-bordered w-full "
                        />
                        <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResumeEducationModal;
