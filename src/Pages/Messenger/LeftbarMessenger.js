import React from "react";
import { BiSearch } from "react-icons/bi";
// import './LeftBarMessenger.css'
import pp from "../../assest/images/pp.jpg";

const LeftbarMessenger = ({friend}) => {
  return (
    <div >
      <div className="friend-search border-b border-gray-300 rounded-lg">
        {/* search start here */}

        {/* search end here */}

        <div className="flex items-center gap-3 my-5">
            {/* avatar starts here */}
          <div className="avatar ">
            <div className="w-12">
              {
                friend?.profileImage? <img src={friend?.profileImage} className='border-2 border-' alt="" />:<img src={pp} alt="" />
              }
            </div>
          </div>
          {/* avatar ends here */}
          <p>{friend?.name}</p>
        </div>
      </div>
    </div>

    
  );
};

export default LeftbarMessenger;
