import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ResumeJobModal = ({refetch}) => {

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
        const Organization = data.Organization;
        const Role = data.Role;
        const startDate = data.startDate;
        const endDate = data.endDate;
        const Location= data.Location;


        const jobDetails = {

            Organization,
            Role,
            startDate,
            endDate,
            Location,

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
            toast.success("job Added");
            reset()
        }
      });
      }
    
    return (
        <div>
        <input type="checkbox" checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)} id="resume-job-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="resume-job-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
             Add Your Job!
            </h3>
            <form onSubmit={handleSubmit(handleProjectAdd)}>
                  <label className="label">
                    {" "}
                    <span className="label-text font-extrabold">Organization</span>
                  </label>
                  <input
                    type="text"
                    {...register("Organization", {
                    })}
                    className="input input-bordered w-full "
                  />
                  <label className="label">
                    {" "}
                    <span className="label-text font-extrabold">Role</span>
                  </label>
                  <input
                    type="text"
                    {...register("Role", {
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
                    <span className="label-text font-extrabold">Location</span>
                  </label>
                  <input
                    type="text"
                    {...register("Location", {
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

export default ResumeJobModal;