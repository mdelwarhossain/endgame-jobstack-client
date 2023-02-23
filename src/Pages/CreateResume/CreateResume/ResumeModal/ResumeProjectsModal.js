import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ResumeProjectsModal = ({refetch}) => {

    const {user} = useContext(AuthContext)

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

      const handleProjectAdd = data =>{
        const projectName = data.projectName;
        const projectLink = data.projectLink;
        const startDate = data.startDate;
        const endDate = data.endDate;
        const projectDescription= data.projectDescription;


        const jobDetails = {

            projectName,
            projectLink,
            startDate,
            endDate,
            projectDescription,

        }

        console.log(jobDetails)

        fetch(`http://localhost:5000/resumeDetails/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            refetch()
            handleFormSubmit()
            toast.success("Project Added");
            reset()
        }
      });
      }
    return (
        <div>
      <input type="checkbox" checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)} id="resume-projects-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="resume-projects-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           Add Your Project!
          </h3>
          <form onSubmit={handleSubmit(handleProjectAdd)}>
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Project Name</span>
                </label>
                <input
                  type="text"
                  {...register("projectName", {
                  })}
                  className="input input-bordered w-full "
                />
                <label className="label">
                  {" "}
                  <span className="label-text  font-extrabold">Start Date</span>
                </label>
                <input
                  type="month"
                  {...register("startDate", {
                  })}
                  className="input w-full input-bordered "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">End Date</span>
                </label>
                <input
                  type="month"
                  {...register("endDate", {
                  })}
                  className="input w-full input-bordered "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Project Link</span>
                </label>
                <input
                  type="text"
                  {...register("projectLink", {
                  })}
                  className="input w-full input-bordered "
                />
                <label className="label">
                  {" "}
                  <span className="label-text font-extrabold">Description</span>
                </label>
                <input
                  type="text"
                  {...register("projectDescription", {
                  })}
                  className="input w-full input-bordered "
                />
                <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
            </form>
        </div>
      </div>
    </div>
    );
};

export default ResumeProjectsModal;