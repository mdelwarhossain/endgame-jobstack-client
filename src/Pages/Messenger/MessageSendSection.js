import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import './Messenger.css'

const MessageSendSection = ({
  inputValue,
  messageHandler,
  newMessage,
  sendMessage,
}) => {
  return (
    <div className="message-type mt-5 relative">
      <input
        style={{
          borderBottom: "2px solid #0073b1",
          borderRadius: "20px",
          paddingLeft: "40px",
          paddingRight: "70px",
          outline: "none",
        }}
        type="text"
        value={newMessage}
        onChange={messageHandler}
        placeholder="Write a message..."
        className="w-full py-2"
      />
      {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5z" />
    </svg>
  </div> */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
        <button
          onClick={sendMessage}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageSendSection;
