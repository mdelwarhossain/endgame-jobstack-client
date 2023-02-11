import React, { useEffect, useState } from "react";
import RealPostCard from "./RealPostCard";
import { useQuery } from "@tanstack/react-query";
import { FaImages } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const RealPost = () => {
  const { user } = useContext(AuthContext);

  const imageHostKey = "c8246134e51fb0e0cbdc4f35b003ee74";

  const [currentUserDetails, setCurrentUserDetails] = useState();
  const waitTime = 1000;

  useEffect(() => {
    const id = setInterval(() => {
      fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentUserDetails(data);
        });
    }, waitTime);
    return () => clearInterval(id);
  }, [user?.email]);

  // const { data: img = [] } = useQuery({
  //   queryKey: ["img", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
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
            email: user.email,
            name: user.displayName,
            likes: 0,
          };
          console.log(post);
          fetch("https://endgame-jobstack-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                refetch();
                toast.success("post uploaded");

                reset();
              }
            });
        }
      });
  };

  //old code
  // const { data: posts = [], refetch } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () =>
  //     fetch("https://endgame-jobstack-server.vercel.app/allposts").then((res) => res.json()),
  // });
  const [postss, setpost] = useState([]);

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://endgame-jobstack-server.vercel.app/allposts");
      const data = await res.json();
      setpost(data);
      // console.log(data);
      return data;
    },
  });

  // const [posts, setposts] = useState([]);
  // useEffect(() => {
  //   fetch("https://endgame-jobstack-server.vercel.app/allposts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setposts(data);
  //       if (data.acknowledged) {
  //         refetch();
  //       }
  //     })
  //     .catch((error) => console.error(error));
  // }, [refetch]);
  return (
    <div>
      <div className="mx-6 my-6">
        <form className="flex items-center" onSubmit={handleSubmit(handleSub)}>
          <img
            alt=""
            className="w-11 h-11 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 mr-4"
            src={currentUserDetails?.profileImage}
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
          <input
            type="submit"
            value="submit"
            className="btn btn-primary btn-sm md:btn-md ml-1"
          />
        </form>
      </div>
      {/* //post 2  */}
      <div>
        {postss.map((post) => (
          <RealPostCard key={post._id} post={post}></RealPostCard>
        ))}
      </div>
    </div>
  );
};

export default RealPost;
