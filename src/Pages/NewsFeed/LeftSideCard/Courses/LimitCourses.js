import React from "react";
import js from '../../../../assest/images/js.png'
import react from '../../../../assest/images/react.png'
import { GiCandlebright } from 'react-icons/gi';
import { Link } from "react-router-dom";
import LoadingPage from "../../../../Shared/LoadingPage/LoadingPage";

const LimitCourses = ({course}) => {
  // console.log(course)
 
  return (
    
    <div>
      <Link to='/course'>
    <div className=" cursor-pointer  ">
      <div className="mb-5 shadow-xl rounded-2xl p-5">
        <img className="rounded-xl" style={{height:"200px"}} src={course?.image} alt="" />

        <div className="flex justify-between mt-5 items-center">
        <p className="font-extrabold ">{course?.name}</p>
        <p className="badge bg-green-700 text-white font-bold p-3">Free</p>
        </div>
      </div>

    </div>
    </Link>
    </div>
  );
};

export default LimitCourses;
