import React from "react";

const UserProfileInfo = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full mt-10 rounded-lg border border-green-700">
            <div className="flex items-center justify-center pt-10 flex-col">
              <img
                src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"
                alt=""
                className="rounded-full w-32"
              />
              <h1 className="text-gray-800 font-semibold text-xl mt-5">
                Bae Suzy
              </h1>
              <h1 className="text-gray-600 font-semibold text-xl">
                React Developer
              </h1>
              <h1 className="text-gray-500 text-sm mt-2">Seoul, South Korea</h1>
              <p className="text-gray-600 text-sm p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-black-600 text-sm p-2 text-center font-semibold">
                email@ph.com | 017********
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full mt-5 rounded-lg border border-green-700">
            <div className="p-5">
              <h1 class="text-gray-800 font-bold text-2xl mt-2 mb-5">
                WORK EXPERIENCE
              </h1>
              <h1 class="text-gray-600 font-medium ">
                COMMUNITY MANAGEMENT EXECUTIVE
              </h1>
              <h1 class="text-gray-500 text-sm mt-1">
                Brandmyth Digital Bangladesh
              </h1>
              <h1 class="text-black-500 text-sm py-3 px-6">
                Managing corporate social media handles <br /> Matching
                engagement with the target audience Organize, <br /> Implement
                and manage engaging marketing campaigns
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full mt-5 rounded-lg border border-green-700">
            <div className="p-5">
              <h1 class="text-gray-800 font-bold text-2xl mt-2 mb-5">
                ACADEMIC CREDENTIALS
              </h1>
              <h1 class="text-gray-600 font-medium ">
                Jahangirnagar University
              </h1>
              <h1 class="text-gray-500 text-sm mt-1">
                Accounting & Information Systems
              </h1>
              <h1 class="text-gray-500 text-sm mt-1">BBA</h1>
              <h1 class="text-black-500 text-sm  ">2019-2023</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full mt-5 rounded-lg border border-green-700">
            <div className="p-5">
              <h1 class="text-gray-800 font-bold text-2xl mt-2 mb-5">
                COURSES
              </h1>
              <h1 class="text-gray-600 font-medium ">
                Complete Web Development Course
              </h1>
              <h1 class="text-gray-500 text-sm mt-1">Programing Hero</h1>

              <h1 class="text-black-500 text-sm  ">2022</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full mt-5 rounded-lg border border-green-700">
            <div className="p-5">
              <h1 class="text-gray-800 font-bold text-2xl mt-2 mb-5">
                Projects
              </h1>
              <h1 class="text-gray-600 font-medium ">Jobstack</h1>
              <h1 class="text-black-500 text-sm py-3 px-6 ">
                Technologies- React JS, React Router Dom, Tailwind, NodeJS,
                MongoDB, ExpressJS, Firebase,JWT
                <br /> 1. A secondhand keyboard buy/sell website <br /> 2. The
                users can register as a buyer or seller <br />
                3. Authentication with Firebase has been added to the login
                register, and JWT has been implemented
              </h1>
              <button className="btn btn-sm btn-success mt-2">
                Show Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
