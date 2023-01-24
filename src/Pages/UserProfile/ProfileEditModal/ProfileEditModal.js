import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProfileEditModal = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)

    //modal submit button
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.bookingItemName.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;

        // const booking = {

        //   userName:name,
        //   email,
        //   bookingItem:item,
        //   bookingItemImage:bookingItem.image,
        //   productPrice:price,
        //   userNumber:number,
        //   userLocation:location
        // }

        //sending booking data to db

        // fetch('https://resale-server-side-seven.vercel.app/bookings', {
        //   method:'POST',
        //   headers:{
        //     'content-type':'application/json'
        //   },
        //   body: JSON.stringify(booking)
        // })

        // .then(res => res.json())
        // .then(data => {
        //   console.log(data);
        //   setBookingItem(null)
        //   toast.success("Booking Confirmed")
          
    
        // })
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
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-10">
            <label className="font-bold" htmlFor="name">First Name</label>
         <input type="text" name="fName" defaultValue={user?.displayName}  className="input input-bordered input-info w-full" />
            <label className="font-bold" htmlFor="name">Last Name</label>
         <input type="text" name="LName" defaultValue={user?.displayName}  className="input input-bordered input-info w-full" />
         <label className="font-bold" htmlFor="location">Location</label>
         <input type="text" name="locationCity" placeholder="city/state" className="input input-bordered input-info w-full" />
         <label className="font-bold" htmlFor="location">Country</label>
         <input type="text" name="country" className="input input-bordered input-info w-full" />
         <label className="font-bold" htmlFor="location">School/College</label>
         <input type="text" name="school" className="input input-bordered input-info w-full" />
         <label className="font-bold" htmlFor="location">University</label>
         <input type="text" name="university" className="input input-bordered input-info w-full" />
         <label className="font-bold" htmlFor="location">About</label>
         <input type="text" name="about" className="input input-bordered input-info w-full" />
         <input type="file" name="about" className="input input-bordered input-info w-full" />
         <input type="file" name="about" className="input input-bordered input-info w-full" />
         <input type="submit" value="Submit" className="btn btn-accent w-full" />
         </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;
