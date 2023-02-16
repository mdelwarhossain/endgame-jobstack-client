import React, { useEffect } from "react";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CreatePost from "../CreatePost/CreatePost";
import LoadingPage from "../../../Shared/LoadingPage/LoadingPage";
import CardLoader from "../../../Shared/LoadingPage/CardLoader/CardLoader";

const RealPostCard = ({ post }) => {
  const [currentUserDetails, setCurrentUserDetails] = useState();
  const { user } = useContext(AuthContext);
  const [like, setlike] = useState(post.likes);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUserDetails(data);
      });
  }, [user?.email]);

  // console.log(user?.name);
  const handleLike = () => {
    setlike(isActive ? like - 1 : like + 1);
    setIsActive(!isActive);
  };

  //like counting

  const likeObject = {
    like,
  };
  fetch(`https://endgame-jobstack-server.vercel.app/updatelike/${post._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(likeObject),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`Thanks for your reaction`);
      }
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    const commentInfo = {
      comment,
      post_id: post._id,
      email: user?.email,
      name: user?.displayName,
      status: post.status,
      userImage: currentUserDetails?.profileImage,
    };
    console.log(commentInfo);
    fetch("https://endgame-jobstack-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("comment added");
        form.reset();
        refetch();
      });
  };
  const url = `https://endgame-jobstack-server.vercel.app/comment?post_id=${post._id}`;

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", post._id],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  //  if (isLoading) {
  //   return <CardLoader></CardLoader>
  // }

  return (
    <div>
      <div className="rounded-md shadow-md max-w-full bg-gray-200  my-5 mx-12">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <img
              src={post?.userImage}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {post?.name}
              </h2>
            </div>
          </div>
          <button
            title="Open options"
            type="button"
            className="hidden md:block"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg> */}
          </button>
        </div>
        <img
          src={post?.image}
          alt=""
          className="object-cover object-center w-full h-72 bg-gray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="curser-pointer text-2xl select-none">
                {isActive ? (
                  <BsFillSuitHeartFill
                    className="text-red-500"
                    onClick={handleLike}
                  />
                ) : (
                  <BsSuitHeart onClick={handleLike} />
                )}
              </div>
              <span>{like} </span>
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                </svg> */}
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                </svg> */}
              </button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex items-center justify-center"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg> */}
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              {/* <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div> */}
              {/* <span className="text-sm">
                Liked by
                <span className="font-semibold">test2</span>
              </span> */}
            </div>
          </div>
          <div className="my-3">
            <p className="text-sm mb-2 text-start">
              <h2>{post?.status}</h2>
            </p>
            {comments.map((comment, index) => (
              <div className="flex items-center">
                <img
                  src={comment?.userImage}
                  alt=""
                  className="object-cover object-center w-5 h-5 rounded-full shadow-sm bg-gray-500 border-gray-700 mr-2"
                />
                <p className="text-sm flex">
                  <span
                    key={index}
                    className="text-base font-semibold  flex flex-row items-center mr-2"
                  >
                    {comment.name}
                  </span>
                  {comment.comment}
                </p>
              </div>
            ))}
            <form onSubmit={handleSubmit} action="">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full bg-transparent border border-green-500  rounded text-sm  mt-2 pl-2 py-1"
              />
              {/* <input
                className=" btn  border bg-[#c77dff] text-white hover:bg-[#e0aaff]"
                type="submit"
                value="Submit"
              /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealPostCard;
