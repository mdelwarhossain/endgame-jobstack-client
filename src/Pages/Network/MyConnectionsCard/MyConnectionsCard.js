import React from 'react';

const MyConnectionsCard = () => {
    return (
        <div>
            <div className='grid grid-cols-8'>
            <div className="avatar col-span-1">
                <div className="w-16 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
            <div className='col-span-6'>
                <p>PH Warriors</p>
                <p>Mern Stack Coders</p>
            </div>
            <button><p className='col-span-1'>Message</p></button>
        </div>
            <div className="divider"></div>
        </div>
    );
};

export default MyConnectionsCard;