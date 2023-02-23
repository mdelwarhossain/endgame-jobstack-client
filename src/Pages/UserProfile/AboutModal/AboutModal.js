import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AboutModal = ({ userDetails, userData, isLoading, refetch }) => {

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
        about:data.about
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
      <input type="checkbox" checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)} id="about-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center my-5">Add Your About</h3>
    <form onSubmit={handleSubmit(handleInfoUpdate)}>

                {/* <input
                defaultValue={details.location}
                  type="text"
                  {...register("location", {
                  })}
                  className="input input-bordered w-full "
                /> */}
                <textarea 
                defaultValue={userDetails?.about}
                {...register("about", {
                })}
                className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                <input type="submit" className="btn btn-outline btn-info w-full mt-5" value="Update" />
            </form>
  </div>
</div>
    </div>
    );
};

export default AboutModal;