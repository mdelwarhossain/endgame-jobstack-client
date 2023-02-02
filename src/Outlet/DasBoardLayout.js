import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/UseAdmin";
import Navbar from "../Shared/Navbar/Navbar";

const DasBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile bg-slate-400">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">All Users </Link>
            </li>
            <li>
              <Link to="/dashboard/jobSeeker/JobSeeker">JobSeeker </Link>
            </li>
            <li>
              <Link to="/dashboard/recruiter/Recruiter">Recruiter </Link>
            </li>
            {/* {isSeller && (
              <>
                <li>
                  <Link to="addproducts">Add Products</Link>
                </li>
                <li>
                  <Link to={`myproducts/${user?.email}`}>My Products</Link>
                </li>
              </>
            )} */}

            {/* {isAdmin && (
              <>
                <li>
                  <Link to={`allsellers/Seller`}>All Sellers</Link>
                </li>
                <li>
                  <Link to={`allbuyers/Buyer`}>All Buyers</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DasBoardLayout;
