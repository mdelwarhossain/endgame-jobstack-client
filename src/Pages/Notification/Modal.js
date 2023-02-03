import React from 'react';
import { FaBellSlash } from 'react-icons/fa';

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="notification-modal" className="modal-toggle" />
            <label htmlFor="notification-modal" className="modal cursor-pointer">
                <label className="modal-box relative py-6" htmlFor="">
                    <div className='flex gap-5'>
                        <p className='text-2xl font-bold text-red-600'>X</p>
                        <p className="text-center ml-2">Delete this notification</p>
                    </div>
                    <div className='flex gap-5 pt-2'>
                        <p className='text-2xl text-blue-500'><FaBellSlash></FaBellSlash></p>
                        <p className="text-center ">Turn off noication like this</p>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default Modal;