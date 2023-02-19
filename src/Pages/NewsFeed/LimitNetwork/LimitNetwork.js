import React from 'react';
import { Link } from 'react-router-dom';

const LimitNetwork = ({ network }) => {
    return (
        <div>
            <Link to='/network'>
                <div className=" cursor-pointer  ">
                    <div className="mb-5 border border-gray-300 rounded-lg p-5">
                        <img className="rounded-xl" style={{ height: "200px" }} src={network?.profileImage} alt="" />

                        <div className="flex justify-between mt-5 items-center">
                            <p className="font-extrabold ">{network?.name}</p>
                            <Link to='/network'>
                                <button className='bg-[#2E8B57] mt-2 rounded hover:bg-green-900 text-white font-bold btn-md'>Follow
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default LimitNetwork;