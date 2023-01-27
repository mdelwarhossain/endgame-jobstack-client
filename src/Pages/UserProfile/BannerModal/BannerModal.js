import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaImages } from "react-icons/fa";


const BannerModal = ({ userDetails, userData, isLoading, refetch }) => {

    const userEmail = userData[0]?.email;
    const imageHostKey = "c8246134e51fb0e0cbdc4f35b003ee74";
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();


      const handleSub = (data) => {
        console.log(data)


        
        const image = data.image[0];
        console.log(image)
        
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {

              const update = {
                bannerImage: imgData.data.url,
              };



              fetch(`http://localhost:5000/usersQueryEmail?email=${userEmail}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(update),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.modifiedCount) {
                    
                    refetch()
                    toast.success("Cover photo added");
                  }
                });
            };
          });
      };
  return (
    <div>
      <input type="checkbox" id="banner-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="banner-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold mb-5 text-center">Upload a Cover Photo</h3>
    <form className="flex items-center" onSubmit={handleSubmit(handleSub)}>
    <label htmlFor="icon-button-file" className="mx-32">
          <FaImages className="text-sm  md:text-3xl cursor-pointer "></FaImages>
        </label>
        <input
          // accept="image/*"
          name="image"
          {...register("image")}
          id="icon-button-file"
          type="file"
          style={{ display: "none" }}
        />
        <input type="submit" className="btn btn-outline btn-info" value='Upload'/>
    </form>
  </div>
</div>
    </div>
  );
};

export default BannerModal;
