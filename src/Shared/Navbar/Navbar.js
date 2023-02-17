import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { RiHomeHeartFill } from "react-icons/ri";
import { BsChatFill, BsFillBagPlusFill } from "react-icons/bs";
import { FaBlog, FaSearch } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

import { useEffect } from "react";
import pp from "../../assest/images/pp.jpg";
import "./header.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import logo from "../../../src/assest/logo/grow (1).png";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [loading, setLoading] = useState(false);

  const [currentUserDetails, setCurrentUserDetails] = useState();

  useEffect(() => {
    fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUserDetails(data));
  }, [user?.email]);

  // const waitTime = 5000;

  // useEffect(() => {
  //   setLoading(true)
  //   const id = setInterval(() => {
  //     fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         } else {
  //           throw new Error('Something went wrong with the fetch request');
  //         }
  //       })
  //       .then((data) => {
  //         setCurrentUserDetails(data);
  //         setLoading(false)
  //       })
  //       .catch((error) => {
  //         // console.error(error);
  //         setLoading(false);
  //       });
  //   }, waitTime);
  //   return () => clearInterval(id);
  // }, [user?.email]);

  const handleSignout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <React.Fragment>
      {user?.uid && (
        <>
          <span className="">
            <RiHomeHeartFill className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/newsfeed">
                <RiHomeHeartFill className="lg:hidden -mr-2" />
                Newsfeed
              </Link>
            </li>
          </span>
          <span className="">
            <BsFillBagPlusFill className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/jobs">
                <BsFillBagPlusFill className="lg:hidden -mr-2" />
                Jobs
              </Link>
            </li>
          </span>
          <span className="">
            <BsFillBagPlusFill className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/hire">
                <BsFillBagPlusFill className="lg:hidden -mr-2" />
                Hire
              </Link>
            </li>
          </span>
          <span className="">
            <FaBlog className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/course">
                <FaBlog className="lg:hidden -mr-2" />
                Course
              </Link>
            </li>
          </span>
          <span className="">
            <MdQuiz className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/quiz">
                <MdQuiz className="lg:hidden -mr-2" />
                quiz
              </Link>
            </li>
          </span>
          <span className="">
            <BiNetworkChart className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/network">
                <BiNetworkChart className="lg:hidden -mr-2" />
                Network
              </Link>
            </li>
          </span>
          <span className="">
            <MdNotificationsActive className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/notification">
                <MdNotificationsActive className="lg:hidden -mr-2" />
                Notification
              </Link>
            </li>
          </span>
          <span className="">
            <BsChatFill className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/messenger">
                <BsChatFill className="lg:hidden -mr-2" />
                Messages
              </Link>
            </li>
          </span>
          {/* <span className="">
            <BsChatFill className="mx-auto -mb-4 hidden lg:block text-white" />
            <li className="font-bold lg:text-white">
              <Link to="/resumeTemplate">
                <BsChatFill className="lg:hidden -mr-2" />
                Resume Template
              </Link>
            </li>
          </span> */}
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="relative header">
      <div className="navbar py-2 flex items-center" data-theme="night">
        {/* style={{backgroundColor:'#0077c9'}} */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 h-16 ml-2" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex mt-4">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end flex items-center">
          {user?.uid ? (
            <div>
              <div className="relative">
                <button onClick={handleToggle}>
                  {currentUserDetails?.profileImage ? (
                    <img
                      alt=""
                      className="w-7 h-7 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 mr-4"
                      src={currentUserDetails?.profileImage}
                    />
                  ) : (
                    <img
                      alt=""
                      className="w-7 h-7 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 mr-4"
                      src={pp}
                    />
                  )}
                </button>
                {isOpen && (
                  <ul className="absolute  top-100 right-0 z-10">
                    <div className="rounded-full h-72 w-72">
                      {/* card */}

                      {loading ? (
                        <LoadingPage></LoadingPage>
                      ) : (
                        <div className="profile-container ">
                          <Link to="/userProfile">
                            <div className="profile-image">
                              {currentUserDetails?.profileImage ? (
                                <img
                                  src={currentUserDetails?.profileImage}
                                  alt=""
                                />
                              ) : (
                                <img src={pp} alt="" />
                              )}
                            </div>
                          </Link>
                          <div className="profile-details  text-black">
                            <Link to="/userProfile ">
                              <p className="font-extrabold hover:underline ">
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
                            <div>
                              <div className="mt-5">
                                <div className="flex items-center justify-between ">
                                  <h3 className=" font-extrabold ">
                                    Connection{" "}
                                  </h3>
                                  <p className="font-bold text-blue-600 mt-1">
                                    21
                                  </p>
                                </div>

                                {/* <Link to='/createResume'>
                                  <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                                    Create Resume
                                  </button>
                                  </Link> */}

                                <button
                                  className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                                  onClick={handleSignout}
                                >
                                  Sign Out
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <>
              <span className="flex items-center mr-6">
                <FaUser className=" text-white mr-2" />
                <li className="font-bold lg:text-white list-none">
                  <Link to="/login">Login</Link>
                </li>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
