import React from "react";
import ph from '../../../../assest/images/PH.png'
import intern from '../../../../assest/images/intern.png'
import amazon from '../../../../assest/images/amazon.jpg'
import { RiUserSettingsFill } from 'react-icons/ri';
const Sponsored = () => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-extrabold my-5">Sponsored <RiUserSettingsFill className="inline"/></h3>
      <div  className="mb-5 shadow-xl">
         <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={amazon} onClick="https://www.amazon.com/" /></a>
      </div>
      <div  className="mb-5 shadow-xl">
         <a href="https://www.programming-hero.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={ph} onClick="https://www.programming-hero.com/" /></a>
      </div>
      <div  className="mb-5 shadow-xl">
         <a href="https://internshala.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={intern} onClick="https://internshala.com/" /></a>
      </div>
    </div>
  );
};

export default Sponsored;
