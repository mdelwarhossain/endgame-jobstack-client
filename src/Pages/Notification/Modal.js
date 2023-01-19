import React from 'react';
import { FaBellSlash } from 'react-icons/fa';

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="notification-modal" className="modal-toggle" />
            <label htmlFor="notification-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className='flex gap-5'>
                        <p className='text-2xl font-bold'>X</p>
                        <p className="">Delete this notification</p>
                    </div>
                    <div className='flex gap-5 py-4'>
                        <p className='text-2xl'><FaBellSlash></FaBellSlash></p>
                        <p className="">Turn off noication like this</p>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default Modal;