import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import pp from "../../../assest/images/pp.jpg";
import cp from "../../../assest/images/cp.jpg";
import Loading from "../../../Shared/LoadingPage/LoadingPage";
import { FaHandPointRight } from 'react-icons/fa';
import CardLoader from "../../../Shared/LoadingPage/CardLoader/CardLoader";
import LoadingPage from "../../../Shared/LoadingPage/LoadingPage";

const LeftSideCard = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [currentUserDetails, setCurrentUserDetails] = useState();

  useEffect(() =>{
    fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setCurrentUserDetails(data);
            setLoading(false);
          });
  },[user?.email])

  // const waitTime = 1000;

  // useEffect(() => {
  //   setLoading(true);
  //   const id = setInterval(() => {
  //     fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCurrentUserDetails(data);
  //         setLoading(false);
  //       });
  //   }, waitTime);
  //   return () => clearInterval(id);
  // }, [user?.email]);
  return (
    <div className="my-5 ">
      {loading ? (
        <div>
          <LoadingPage></LoadingPage>
        </div>
      ) : (

        <div className="profile-container">
          <div className="banner-image">
            {currentUserDetails?.bannerImage ? (
              <img src={currentUserDetails?.bannerImage} alt="" />
            ) : (
              <img src={cp} alt="" />
            )}
          </div>
          <div className="profile-image">
            {currentUserDetails?.profileImage ? (
              <img src={currentUserDetails?.profileImage} alt="" />
            ) : (
              <img src={pp} alt="" />
            )}
          </div>
          <div className="profile-details">
            <Link to='/userProfile' className="hover:underline">
              <p className="font-extrabold">
                <small>{currentUserDetails?.name}</small>
              </p>
            </Link>
            <p className="font-bold">
              <small>{currentUserDetails?.email}</small>
            </p>
            <hr
              style={{
                marginTop: "12px",
                color: "#000000",
                backgroundColor: "#000000",
                height: 0.5,
                borderColor: "#000000",
              }}
            />
            {currentUserDetails?.headline && (
              <p>
                <small>{currentUserDetails?.headline}</small>
              </p>
            )}

            {/* others */}
            <div >
              <div className="mt-5">
                <div className="flex items-center justify-between ">
                  <h3 className=" font-extrabold">Connection </h3>
                  <p className="font-bold text-blue-600 mt-1">21</p>
                </div>
                <Link to='/network'>
                  <div className="hover:underline flex items-center justify-between">
                    <h2 className=" mt-1 font-bold ">
                      <small> Grow Your Network</small>
                    </h2>
                    <span><FaHandPointRight className="inline ml-4"></FaHandPointRight></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSideCard;
