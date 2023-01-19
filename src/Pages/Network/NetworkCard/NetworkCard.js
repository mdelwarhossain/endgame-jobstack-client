import React from 'react';

const NetworkCard = () => {
    return (
        <div className="card card-compact w-48 my-5 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="">Team PH Warriors</h2>
                <button className="btn btn-primary">Connect</button>
            </div>
        </div>
    );
};

export default NetworkCard;