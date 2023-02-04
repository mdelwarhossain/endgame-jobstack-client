import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaImages } from "react-icons/fa";

const ProImgModal = ({ userDetails, userData, isLoading, refetch }) => {
  const userEmail = userDetails?.email;
  const imageHostKey = "c8246134e51fb0e0cbdc4f35b003ee74";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleUpload = (data) => {
    console.log(data);
    const image = data.image[0];
    console.log(image);

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
            profileImage: imgData.data.url,
          };

          fetch(`http://localhost:5000/user/${userEmail}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(update),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                refetch();
                toast.success("Profile Picture added");
              }
            });
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="pro-img-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="pro-img-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg mb-5 font-bold">Upload a Profile Picture</h3>
          <form onSubmit={handleSubmit(handleUpload)}>
            <input type="file" name="image" {...register("image")} />
            <input
              type="submit"
              className="btn block mt-5 btn-outline btn-info"
              value="Upload"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProImgModal;
