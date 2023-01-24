import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { RiHomeHeartFill } from "react-icons/ri";
import { BsFillBagPlusFill } from "react-icons/bs";
import { FaBlog, FaSearch } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md"
import { FaSignOutAlt, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  const menuItems = <React.Fragment>
    <span className=""><RiHomeHeartFill className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/newsfeed'><RiHomeHeartFill className="lg:hidden -mr-2" />Newsfeed</Link></li></span>
    <span className=""><BsFillBagPlusFill className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/jobs'><BsFillBagPlusFill className="lg:hidden -mr-2" />Jobs</Link></li></span>
    <span className=""><BsFillBagPlusFill className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/hire'><BsFillBagPlusFill className="lg:hidden -mr-2" />Hire</Link></li></span>
    <span className=""><FaBlog className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/'><FaBlog className="lg:hidden -mr-2" />Blogs</Link></li></span>
    <span className=""><BiNetworkChart className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/network'><BiNetworkChart className="lg:hidden -mr-2" />Network</Link></li></span>
    <span className=""><MdNotificationsActive className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/notification'><MdNotificationsActive className="lg:hidden -mr-2" />Notification</Link></li></span>

    {
      user?.uid ?
        <>
          <span className=""><FaSignOutAlt className="mx-auto -mb-4 hidden lg:block text-white" /><li className="font-bold lg:text-white"><button onClick={handleSignout}><FaSignOutAlt className="lg:hidden -mr-2" />Sign Out</button></li></span>
        </>
        :
        <>
          <span className=""><FaUser className="mx-auto  hidden lg:block text-white" /><li className="font-bold lg:text-white"><Link to='/login'><FaUser className="lg:hidden -mr-2" />Login</Link></li></span>
        </>
    }

  </React.Fragment >
  return (
    <div className="navbar py-4 bg-gray-400 flex items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold text-white">Jobstack</Link>
      </div>
      <div className="navbar-center hidden lg:flex mt-4">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <div class="mt-3 w-48 mr-5 ml-auto  hidden sm:block">
          <div class="pl-2 flex items-center border-1 bg-white border shadow-md rounded-full">
            <input class="rounded-l-sm w-full  px-6 text-gray-700 leading-tight focus:outline-none" id="search"
              type="text" placeholder="Search" />
            <div class="">
              <button
                class="text-white btn-sm rounded-full bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-end">
                <FaSearch className="mx-auto" />
              </button>
            </div>
          </div>
        </div>
        <Link to='userProfile' className="mr-6 mt-3"><img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" /></Link>
      </div>
    </div>

    // <div className="bg-gray-400">
    //   <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    //     <div className="relative flex items-center justify-between">
    //       <a
    //         href="/"
    //         aria-label="Company"
    //         title="Company"
    //         className="inline-flex items-center"
    //       >
    //         <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
    //           JobStack
    //         </span>
    //       </a>

    //       {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs" /> */}
    //       <ul className="flex items-center hidden space-x-8 lg:flex">
    //         <li>
    //           <a
    //             href="/newsfeed"
    //             aria-label="Our product"
    //             title="Our product"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             NewsFeed
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/jobs"
    //             aria-label="Our product"
    //             title="Our product"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             Jobs
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/"
    //             aria-label="Product pricing"
    //             title="Product pricing"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             Blogs
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/"
    //             aria-label="About us"
    //             title="About us"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             About us
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/network"
    //             aria-label="network"
    //             title="network"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             Network
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/notification"
    //             aria-label="notification"
    //             title="notification"
    //             className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
    //           >
    //             Notification
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className="flex items-center hidden space-x-8 lg:flex">
    //         <li>
    //           {/* <a
    //             href="/login"
    //             className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide lg:text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //             aria-label="login"
    //             title="login"
    //           >
    //             Log in
    //           </a> */}
    //         </li>
    //         {user?.email ? (
    //           <button className="btn btn-white" onClick={handleSignout}>
    //             SignOut
    //           </button>
    //         ) : (
    //           <Link className="btn lg:text-white" to="/login">
    //             Log In
    //           </Link>
    //         )}
    //       </ul>
    //       <div className="lg:hidden">
    //         <button
    //           aria-label="Open Menu"
    //           title="Open Menu"
    //           className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
    //           onClick={() => setIsMenuOpen(true)}
    //         >
    //           <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //             <path
    //               fill="currentColor"
    //               d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    //             />
    //             <path
    //               fill="currentColor"
    //               d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
    //             />
    //             <path
    //               fill="currentColor"
    //               d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
    //             />
    //           </svg>
    //         </button>
    //         {isMenuOpen && (
    //           <div className="absolute top-0 left-0 w-full">
    //             <div className="p-5 bg-white border rounded shadow-sm">
    //               <div className="flex items-center justify-between mb-4">
    //                 <div>
    //                   <a
    //                     href="/"
    //                     aria-label="Company"
    //                     title="Company"
    //                     className="inline-flex items-center"
    //                   >
    //                     <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
    //                       Company
    //                     </span>
    //                   </a>
    //                 </div>
    //                 <div>
    //                   <button
    //                     aria-label="Close Menu"
    //                     title="Close Menu"
    //                     className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    //                     onClick={() => setIsMenuOpen(false)}
    //                   >
    //                     <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //                       <path
    //                         fill="currentColor"
    //                         d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
    //                       />
    //                     </svg>
    //                   </button>
    //                 </div>
    //               </div>
    //               <nav>
    //                 <ul className="space-y-4">
    //                   <li>
    //                     <a
    //                       href="/newsfeed"
    //                       aria-label="Our product"
    //                       title="Our product"
    //                       className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                     >
    //                       Newsfeed
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="/jobs"
    //                       aria-label="Our product"
    //                       title="Our product"
    //                       className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                     >
    //                       Jobs
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="/"
    //                       aria-label="Product pricing"
    //                       title="Product pricing"
    //                       className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                     >
    //                       Blogs
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="/"
    //                       aria-label="About us"
    //                       title="About us"
    //                       className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                     >
    //                       About us
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="/login"
    //                       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide lg:text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //                       aria-label="login"
    //                       title="login"
    //                     >
    //                       Log in
    //                     </a>
    //                   </li>
    //                   {user?.email ? (
    //                     <button
    //                       className="btn lg:text-white"
    //                       onClick={handleSignout}
    //                     >
    //                       SignOut
    //                     </button>
    //                   ) : (
    //                     <Link className="btn lg:text-white" to="/login">
    //                       Log In
    //                     </Link>
    //                   )}
    //                 </ul>
    //               </nav>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;