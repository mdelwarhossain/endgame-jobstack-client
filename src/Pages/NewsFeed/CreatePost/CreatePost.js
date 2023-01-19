import React from "react";
import { FaImages } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const imageHostKey = "c8246134e51fb0e0cbdc4f35b003ee74";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleSub = (data) => {
    const image = data.image[0];
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
          const post = {
            status: data.caption,
            image: imgData.data.url,
            email: "demo",
            name: "demo1",
            likes: 0,
          };
          console.log(post);
          fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("post uploaded");
              reset();
            });
        }
      });
  };
  return (
    <div className="mx-2 my-6">
      <form className="flex items-center" onSubmit={handleSubmit(handleSub)}>
        <img
          alt=""
          className="hidden md:block w-12 h-12 mr-3 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
          src="https://source.unsplash.com/40x40/?portrait?1"
        />
        <input
          type="text"
          {...register("caption")}
          placeholder="What's in your mind"
          className="relative input input-bordered input-info w-full input-sm md:input-md"
        />
        <label htmlFor="icon-button-file" className="mx-4">
          <FaImages className="text-sm md:text-3xl cursor-pointer "></FaImages>
        </label>

        <input
          // accept="image/*"
          name="image"
          {...register("image")}
          id="icon-button-file"
          type="file"
          style={{ display: "none" }}
        />
        <input type="submit" value="submit" className="btn btn-primary btn-sm md:btn-md ml-1" />
      </form>
    </div>
  );
};

export default CreatePost;
