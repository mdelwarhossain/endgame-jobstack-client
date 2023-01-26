import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/LoadingPage/LoadingPage';
import EditJobModal from '../EditJobModal/EditJobModal';
import JobPostCard from '../JobPostCart/JobPostCard';

const MyJobPost = () => {
  const [myPost, setMyPost] = useState(null); 
  const [id, setId] = useState(null); 
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['myjobpost'],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/jobs/${user?.email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  });
  console.log(data);


  const handleDelete = (id) => {
    // save connections to the database
    fetch(`http://localhost:5000/post/${id}`, {
      method: 'Delete',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
  })
  .then(res => res.json())
  .then(data => {
      if (data.deletedCount > 0) {
          refetch();
          toast.success('Your post has been removed')
      }
  })
  }

  const handleEdit = id => {

  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-2 mt-5">
                <div className="">
                    <div className='flex gap-4 ml-2 mt-2'>
                        <img className='h-10 w-10 rounded-full' src={user?.image} alt="" />
                        <span className='flex gap-2 mt-2'> {user?.displayName}</span>
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                        <Link to={`/jobs/${user?.email}`} className='btn btn-outline btn-primary'>My Posts</Link>
                        <Link to='/addajob' className='btn btn-outline btn-primary'>Add a job</Link>

                    </div>
                </div>
            </div>
      <div className="col-span-6">
        {
          data?.map(post => <JobPostCard
            key={post._id}
            post={post}
            setMyPost={setMyPost}
            setId={setId}
            handleDelete={handleDelete}
          ></JobPostCard>)
        }
      </div>
      
      <div>
              {
                myPost && 
                <EditJobModal
                  myPost={myPost}
                  setMyPost={setMyPost}
                ></EditJobModal>
              }
            </div>
    </div>
  );
};

export default MyJobPost;