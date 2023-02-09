import React from "react";
import js from '../../../../assest/images/js.png'
import react from '../../../../assest/images/react.png'
import { GiCandlebright } from 'react-icons/gi';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [isLoading, setISLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setISLoading(true);
    fetch("http://localhost:5000/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrendingData(data);
        setISLoading(false);
      });
  }, []);

  return (
    <div className="mt-5  ">

      <p className="font-extrabold shadow-lg rounded-md text-cyan-900 text-center py-2 text-xl mx-auto mb-2 bg-gradient-to-r from-green-300 to-blue-300 ">Popular Courses <GiCandlebright className="inline" /></p>

      {/* <div className="mb-5 p-5 shadow-xl rounded-2xl bg-slate-100">
        <img className="rounded-xl" src={react} alt="" />

        <p className="font-bold mt-2 text-cyan-900">Javascript Online Video Course </p>
        <button className="btn btn-warning btn-sm font-bold ">Free</button>
      </div>

      <div className="my-5 p-5 shadow-2xl rounded-2xl bg-slate-100">
        <img className="rounded-xl" src={js} alt="" />
        <p className="mt-2 font-bold text-cyan-900">React Online Video Course <button className="btn btn-warning btn-sm font-bold ">Premium</button></p>
      </div> */}

    </div>
  );
};

export default Courses;
