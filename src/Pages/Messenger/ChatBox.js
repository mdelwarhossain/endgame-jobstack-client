import React, { useContext } from "react";
import pp from "../../assest/images/pp.jpg";
import UserInfoProvider from "../../contexts/UserInfoProvider";
import "./Chatbox.css";
import MessageSendSection from "./MessageSendSection";

const ChatBox = ({refetch,scrollRef,currentMessage, userDetails,currentFriend,messageHandler,newMessage ,sendMessage}) => {

  // const {userDetails}= useContext(UserInfoProvider);
  // console.log(userDetails)


//   let year = timestamp.getFullYear();
// let month = timestamp.getMonth() + 1; // January is 0
// let day = timestamp.getDate();
// let hour = timestamp.getHours();
// let minute = timestamp.getMinutes();
// let second = timestamp.getSeconds();
  return (
    <div>
      <div>
      <div
        style={{ borderBottom: "2px solid gray" }}
        className="flex items-center  justify-between py-3 px-5 my-2"
      >
        {/* avatar starts here */}
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            {currentFriend?.profileImage ? (
              <img src={currentFriend?.profileImage} alt="" />
            ) : (
              <img src={pp} alt="" />
            )}
          </div>
        </div>
        {/* avatar ends here */}
        <p className="text-xl font-bold">{currentFriend?.name}</p>
      </div>

      {/* display message */}

      <div className="message-show">
        {
          currentMessage && currentMessage.length>0 ? currentMessage.map(m =>{
            return(m.senderId === userDetails?._id) ? <div ref={scrollRef} className="my-message">
            <div className="my-image-message">
              <div className="my-text p-2">
                <p className="message-text">{m.message}</p>
              </div>
            </div>
            <div className="my-time "><small >{m.date}</small></div>
          </div> : <div ref={scrollRef} className="frnd-message">
          <div className="image-message-time">
            <img src={pp} alt="" />
            <div className="frnd-message-time">
              <div className="fd-text p-2">
                <p className="message-text">
                  {m.message}
                </p>
              </div>
              <p className="frnd-time"><small>{m.date}</small></p>
            </div>
          </div>
        </div> 
          }) : <p className="text-center my-96 font-extrabold">Start Conversation</p>
        }
        
        
        {/* copy */}
      </div>
      </div>
      <MessageSendSection  refetch={refetch}  sendMessage={sendMessage} messageHandler={messageHandler} newMessage={newMessage}></MessageSendSection>
    </div>
  );
};

export default ChatBox;
