import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideCard from "../../NewsFeed/LeftSideCard/LeftSideCard";

const PostDetails = ({ postDetails }) => {
  return (
    <div>
      <input type="checkbox" id="details" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="details"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="p-5 shadow-xl">
            <figure>
              <img
              className="w-full"
                src={postDetails?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p>{postDetails?.status}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{postDetails?.likes} <span className="ml-3">People reacted!!</span></div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
