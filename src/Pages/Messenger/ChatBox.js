import React, { useContext } from "react";
import pp from "../../assest/images/pp.jpg";
import "./Chatbox.css";
import MessageSendSection from "./MessageSendSection";

const ChatBox = ({refetch,currentMessage, userDetails,currentFriend,messageHandler,newMessage ,sendMessage}) => {

  
  const scrollRef = React.useRef(null);

  // Scroll to the bottom of the chat box when a new message is sent or received
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessage]);
  
  return (
    <div className="chat-box">
    <div className="chat-header">
      {/* avatar starts here */}
      <div className="avatar online placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
          {currentFriend?.profileImage ? (
            <img className="border-2 border-green-700" src={currentFriend?.profileImage} alt="" />
          ) : (
            <img className="border-2 border-green-700" src={pp} alt="" />
          )}
        </div>
      </div>
      {/* avatar ends here */}
      <p className="text-xl font-bold">{currentFriend?.name}</p>
    </div>

    {/* display message */}
    <div className="chat-messages-container ">
      <div className="chat-messages">
        {currentMessage && currentMessage.length > 0 ? (
          currentMessage.map((m) => {
            return m.senderId === userDetails?._id ? (
              <div className="message-box my-message" key={m._id}>
                <div className="message-content">
                  <p className="message-text">{m.message}</p>
                  <span className="message-time">{m.date}</span>
                </div>
              </div>
            ) : (
              <div className="message-box friend-message" key={m._id}>
                <div className="message-content">
                  <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      {currentFriend?.profileImage ? (
                        <img
                          src={currentFriend?.profileImage}
                          alt=""
                          className="border-2 border-green-700"
                        />
                      ) : (
                        <img src={pp} className='border-2 border-green-700' alt="" />
                        
                      )}
                    </div>
                  </div>
                  <p className="message-text">{m.message}</p>
                  <span className="message-time">{m.date}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center my-96 font-extrabold">
            Start Conversation
          </p>
        )}
        <div ref={scrollRef}></div>
      </div>
    </div>
    <MessageSendSection
      refetch={refetch}
      sendMessage={sendMessage}
      messageHandler={messageHandler}
      newMessage={newMessage}
    ></MessageSendSection>
  </div>
   

    
  );
};

export default ChatBox;
