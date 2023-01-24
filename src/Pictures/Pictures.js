import React from 'react';
import { Link } from 'react-router-dom';
import './Pictures.css'
const Pictures = () => {
    return (
        <div>
            <div className='body'>
                <div className='container'>
                    <div className='ring '></div>
                    <div className='ring '></div>
                    <div className='ring '></div>
                    {/* <span className='loading'>404</span> */}
                    <h1 className='text-white font-bold text-2xl'>404</h1>

                </div>

            </div>
            <div className='mb-8'>
                <div className=' flex justify-center items-center'>
                    <Link to="/"><button className="btn btn-active btn-primary justify-center items-center">Back To Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Pictures;