import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TopicsCard = ({ quiz }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${quiz.id}`);
    }


    return (
        <div>

            <div className='grid place-items-center font-mono'>

                <div className="bg-amber-50 h-84 rounded-md shadow-2xl">
                    <div className="flex justify-center items-center leading-none">
                        <img
                            src={quiz.logo}
                            alt="pic"
                            className="h-40 bg-blue-400  rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                        />
                    </div>
                    <div className="p-3">
                        <p className="block mb-1 text-2xl font-bold  text-cyan-900"> Name:{quiz.name}</p>
                        <p className="text-md font-semibold tracking-tighter  text-cyan-900">
                            Total quiz :: {quiz.total}
                        </p>
                    </div>
                    <div className="card-actions justify-center mb-3">
                        <button className=" btn btn-sm  btn-primary shadow-xl" onClick={handleNavigate}>Start</button>


                    </div>
                </div>

            </div>



            <div></div>
            {/* <div className="card w-96 bg-amber-50  rounded-lg ">
                <figure><img className='bg-blue-400 h-40  rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700 ' src={quiz.logo} alt='' /></figure>
                <div className="card-body">
                    <h2 className="card-title "> Name :: {quiz.name}</h2>
                    <p className='text-red-600'>Total quiz :: {quiz.total}</p>
                    <div className="card-actions justify-end">
                        <button className=" btn btn-sm  btn-primary shadow-xl" onClick={handleNavigate}>Start</button>


                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TopicsCard;