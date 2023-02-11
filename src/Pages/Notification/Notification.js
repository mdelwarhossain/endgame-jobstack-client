import React from "react";
import Courses from "../NewsFeed/LeftSideCard/Courses/LimitCourses";
import LeftSideCard from "../NewsFeed/LeftSideCard/LeftSideCard";
import Sponsored from "../NewsFeed/LeftSideCard/Sponsored/Sponsored";
import Modal from "./Modal";
import logo1 from "../../assest/images/logo1.webp";
import logo2 from "../../assest/images/logo2.png";
import logo3 from "../../assest/images/logo3.png";
import logo4 from "../../assest/images/logo4.png";
import logo5 from "../../assest/images/logo5.png";
import logo6 from "../../assest/images/logo6.png";
import logo7 from "../../assest/images/logo7.webp";
import logo8 from "../../assest/images/logo8.png";
import logo9 from "../../assest/images/logo9.png";
import logo10 from "../../assest/images/logo10.png";
import RightSideCard from "../NewsFeed/RightSideCard/RightSideCard";

const Notification = () => {
  return (
    <div className="allContainer px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
      <div className="hidden md:block col-span-2">
        <LeftSideCard></LeftSideCard>
        <Courses></Courses>
        <Sponsored></Sponsored>
      </div>
      <div className="col-span-4 mt-5  w-full bg-slate-100 shadow-xl p-5">
        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className=" rounded">
              <img className="w-24 h-24" src={logo1} alt="" />
            </div>
          </div>
          <div className="col-span-4 ">
            <p className="text-cyan-900 text-lg font-bold text-center">IT Inova recruiting actively.</p>

            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>

          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3 ">now</p>
            <label htmlFor="notification-modal" className="btn btn-ghost  ">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Creative IT hiring actively.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">50m</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo3} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Your profile showed in 7 serch result</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-5">1h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost ml-2">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo4} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Jobstack members are sharing their unpaid intern experience.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">2h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost ">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo5} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Meionsa is looking for mern stack developer.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">2h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo6} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">To boost your skills attend the courses</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Visit Courses Now</button>


          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">4h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo7} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Job Alert! 15 new job post.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">4h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>

        <div className="divider"></div>
        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo8} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Corianka is looking for react developer.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">5h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo9} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Job Alert! new job post for full stack developer</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-3">8h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="avatar col-span-1">
            <div className="w-16 rounded">
              <img src={logo10} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-cyan-900 text-lg font-bold text-center">Aw Group is actively hiring backend developer.</p>
            <button className=" btn btn-sm btn-outline btn-primary shadow-md ml-28 my-2">Apply Now</button>
          </div>
          <div className="col-span-1">
            <p className="text-orange-600 ml-5">12h</p>
            <label htmlFor="notification-modal" className="btn btn-ghost ml-4">
              ...
            </label>
            <Modal></Modal>
          </div>
        </div>
      </div>


      <div className="hidden p-1 shadow-xl md:block col-span-2">
        <RightSideCard></RightSideCard>
      </div>
    </div>
  );
};

export default Notification;
