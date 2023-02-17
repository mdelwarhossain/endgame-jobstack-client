import React from "react";
import { AiFillLike } from 'react-icons/ai';

const PostDetails = ({ postDetails }) => {
  return (
    <div>
      <input type="checkbox" id="details" className="modal-toggle" hidden />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="details"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="p-5 border border-gray-300 rounded-lg">
            <figure>
              <img
                className="w-full border border-gray-300 rounded-lg"
                src={postDetails?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="flex">
                <p className="font-semibold">{postDetails?.status}</p>
                <div className="badge bg-green-700 text-white  badge-outline">
                  <span className="font-bold mr-2"> {postDetails?.likes}</span> <AiFillLike className="inline"></AiFillLike>
                </div>
              </div>
              <button className="btn mt-5 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 btn-sm rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
