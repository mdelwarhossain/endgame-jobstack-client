import React from "react";
import ph from '../../../../assest/images/PH.png'
import intern from '../../../../assest/images/intern.png'
import amazon from '../../../../assest/images/amazon.jpg'
import { RiUserSettingsFill } from 'react-icons/ri';
const Sponsored = () => {
  return (
    <div className="my-8 drop-shadow-xl mx-5 p-3 rounded-xl ">
      <h3 className="text-xl rounded-md font-extrabold text-center py-2 text-cyan-900  my-5 bg-gradient-to-r from-green-300 to-blue-300 ">Sponsored <RiUserSettingsFill className="inline" /></h3>
      <div className="mb-5">
        <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer"><img className="rounded-xl shadow-md" alt="" src={amazon} onClick="https://www.amazon.com/" /></a>
      </div>
      <div className="mb-5">
        <a href="https://www.programming-hero.com/" target="_blank" rel="noopener noreferrer"><img className="rounded-xl shadow-md" alt="" src={ph} onClick="https://www.programming-hero.com/" /></a>
      </div>
      <div className="mb-5">
        <a href="https://internshala.com/" target="_blank" rel="noopener noreferrer"><img className="rounded-xl shadow-md" alt="" src={intern} onClick="https://internshala.com/" /></a>
      </div>
    </div>
  );
};

export default Sponsored;
