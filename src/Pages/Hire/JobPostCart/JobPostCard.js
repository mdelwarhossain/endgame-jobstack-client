import React from 'react';
import { FaEdit } from 'react-icons/fa';

const JobPostCard = ({ post, setId, setMyPost, handleDelete }) => {
  return (
    <div>
      <div className='grid grid-cols-8'>
        <div className="avatar col-span-1 m-2 mt-4">
          <div className="w-16 h-16 rounded">
            <img src={post?.logo} alt='' />
          </div>
        </div>
        <div className='col-span-5 mt-4'>
          <p className="text-xl font font-semibold">{post?.title}</p>
          <p>Coders Solutions Pvt. Ltd. {post?.name}</p>
          <p>{post?.location}</p>
          <p className="text-green-600">{post?.vacancy} {post?.vacancy > 1 ? 'vacant positions' : 'vacant position'}</p>
        </div>
        <div className='col-span-2 my-10'>
          <button onClick={() => handleDelete(post?._id)} className='text-2xl font-semibold btn btn-outline btn-error'>X</button>
          <label
            htmlFor="edit-job-modal"
            className="text-2xl font-semibold btn btn-outline btn-primary ml-2"
            onClick={() => setMyPost(post)}
          ><FaEdit></FaEdit></label>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default JobPostCard;