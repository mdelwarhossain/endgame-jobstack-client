import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TopicsCard = ({ quiz }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${quiz.id}`);
    }


    return (
        <div>


            <div className="card w-96 bg-amber-50  rounded-lg ">
                <figure><img className='bg-blue-400 ' src={quiz.logo} alt='' /></figure>
                <div className="card-body">
                    <h2 className="card-title "> Name :: {quiz.name}</h2>
                    <p className='text-red-600'>Total quiz :: {quiz.total}</p>
                    <div className="card-actions justify-end">
                        <button className=" btn btn-sm  btn-primary shadow-xl" onClick={handleNavigate}>Start</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicsCard;