import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const JobModal = () => {
    const {user} = useContext(AuthContext)
    console.log(user)


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const jobTitle = form.jobTitle.value;
        const jobLocation = form.jobLocation.value;
        const benefit = form.benefit.value;
        form.reset()

        const jobPostBooking = {

          userName:name,
          userImage:user?.photoURL,
          titel:jobTitle,
          jobLocation,
          benefit
        }

        console.log(jobPostBooking)


        //sending booking data to db

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(jobPostBooking),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Job Post Added");
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
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-10">
         <input type="text" name="name" defaultValue={user?.displayName} disabled  className="input input-bordered input-info w-full" />
         <input type="text" name="jobTitle" placeholder="Job Title"   className="input input-bordered input-info w-full" />
         <input type="text" name="jobLocation" placeholder="Job Location"  className="input input-bordered input-info w-full" />
         <input type="text" name="benefit" placeholder="Salary/Benefit"  className="input input-bordered input-info w-full" />
         <input type="submit" value="Submit" className="btn btn-accent w-full" />
         </form>
        </div>
      </div>
    </>
  );
};

export default JobModal;
