import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import pp from "../../../assest/images/pp.jpg";
import cp from "../../../assest/images/cp.jpg";
import Loading from "../../../Shared/LoadingPage/LoadingPage";

const LeftSideCard = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [currentUserDetails, setCurrentUserDetails] = useState();
  const waitTime = 1000;

  useEffect(() => {
    setLoading(true);
    const id = setInterval(() => {
      fetch(`http://localhost:5000/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentUserDetails(data);
          setLoading(false);
        });
    }, waitTime);
    return () => clearInterval(id);
  }, [user?.email]);
  return (

    <div className='my-5'>
      {
        loading ? <Loading></Loading> :

          <div className="max-w-xs drop-shadow-lg rounded-md shadow-md bg-lime-50  relative ">
            {
              currentUserDetails?.bannerImage ?
                <img src={currentUserDetails.bannerImage} className=" h-48" /> :
                <img src={cp} alt="" className="object-cover object-center w-full rounded-t-md h-48 bg-gray-500" />
            }
            <div className="flex flex-col justify-between p-6 space-y-8 ">
              {
                currentUserDetails?.profileImage ? <img alt="Profile" className="absolute top-36 left-2/4 -ml-8  w-16 h-16 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800" src={currentUserDetails.profileImage} /> :

                  <img alt="Profile" className="absolute top-36 left-2/4 -ml-8  w-16 h-16 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800" src={pp} />
              }
              <div className="space-y-2 text-center">
                <Link to='/userProfile'><h2 className="text-sky-600 text-2xl font-semibold tracking-wide">{currentUserDetails?.name}</h2></Link>
                <div>
                  {
                    currentUserDetails?.headline ? <p className="text-yellow-700 text-md">{currentUserDetails?.headline}</p> :

                      <p className="text-red-700 text-md ">Add A Headline</p>
                  }
                </div>
              </div>
              <hr />
              <div className='hover:bg-gray-200 rounded-md'>
                <Link to='#'>
                  <div>
                    <div className='flex items-center justify-between text-sm'>
                      <h3 className='text-cyan-900'>Connection</h3>
                      <p className='text-blue-400 font-bold'>21</p>
                    </div>
                    <h2 className='text-md font-bold text-cyan-900'>Grow Your Network</h2>
                  </div>
                </Link>
              </div>

              <div>
                {currentUserDetails?.headline ? (
                  <p className="text-yellow-700 text-md">
                    {currentUserDetails?.headline}
                  </p>
                ) : (
                  <p className="text-red-700 text-md">Add A Headline</p>
                )}
              </div>
            </div>
            <hr />
            <div className="hover:bg-gray-200 rounded-md">
              <Link to="#">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <h3 className="text-cyan-900">Connection</h3>
                    <p className="text-blue-400 font-bold">21</p>
                  </div>
                  <h2 className="text-md font-bold text-cyan-900">
                    Grow Your Network
                  </h2>
                </div>
              </Link>
            </div>
            <div>
              <p className="text-sm text-cyan-900">
                Access exclusive tools & insights
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSideCard;
