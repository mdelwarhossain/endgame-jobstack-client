import React from "react";
import cp from "../../assest/images/cp.jpg";
import pp from "../../assest/images/pp.jpg";
import "./RightbarMessage.css";

const RighBarMessenger = ({ currentFriend }) => {
  return (
    <div className="profile-container border border-gray-300 rounded-lg">
      <div className="banner-image">
        {currentFriend?.bannerImage ? (
          <img src={currentFriend?.bannerImage} alt="" />
        ) : (
          <img src={cp} alt="" />
        )}
      </div>
      <div className="profile-image">
        {currentFriend?.profileImage ? (
          <img src={currentFriend?.profileImage} alt="" />
        ) : (
          <img src={pp} alt="" />
        )}
      </div>
      <div className="profile-details">
        <p className="font-bold">
          <small>{currentFriend?.name}</small>
        </p>
        <p className="font-bold">
          <small>{currentFriend?.email}</small>
        </p>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        {currentFriend?.headline && (
          <p>
            <small>{currentFriend?.headline}</small>
          </p>
        )}
      </div>
    </div>
  );
};

export default RighBarMessenger;
