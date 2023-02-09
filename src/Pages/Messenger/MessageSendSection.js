import React from 'react';
import { BsPlusCircle } from 'react-icons/bs'
import { RiGalleryLine } from 'react-icons/ri'

const MessageSendSection = ({inputValue,messageHandler,newMessage,sendMessage}) => {
    return (
        <div className='message-send-section mb-5'>
            {/* <div className="file">
                <BsPlusCircle></BsPlusCircle>
            </div>
            <div className="file">
                <RiGalleryLine></RiGalleryLine>
            </div>
            <div className="file">
                <RiGalleryLine></RiGalleryLine>
            </div> */}
            <div className="message-type">
            <input style={{borderTop:"2px solid green", borderBottom:"none", borderLeft:"none", borderRight:"none",outline:"none"}} onChange={messageHandler}  type="text" value={newMessage} placeholder="Write a message..." className=" w-full " />
             <div className='text-end mt-1'>
             <button onClick={sendMessage} className='btn btn-sm btn-outline btn-info'>Send</button>
             </div>
            </div>
        </div>
    );
};

export default MessageSendSection;