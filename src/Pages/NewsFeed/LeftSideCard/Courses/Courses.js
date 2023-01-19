import React from "react";
import js from '../../../../assest/images/js.png'
import react from '../../../../assest/images/react.png'
import { GiCandlebright } from 'react-icons/gi';

const Courses = () => {
  return (
    <div className="mt-5 ">
        <p className="font-extrabold text-xl mb-3">Popular Courses <GiCandlebright className="inline"/></p>
      <div className="mb-5 p-5 shadow-xl">
            <img src={js} alt="" />
            <p className="font-bold mt-2">Javascript Online Video Course <span className="badge badge-warning font-extrabold">Free</span></p>
      </div>

      <div className="my-5 p-5 shadow-xl">
            <img src={react} alt="" />
            <p className="mt-2 font-bold">React Online Video Course <span className="badge badge-warning font-extrabold">Premium</span></p>
      </div>

    </div>
  );
};

export default Courses;
