import React from 'react';
import { Link } from 'react-router-dom';
import './Pictures.css'
const Pictures = () => {
    return (
        <div>
            <div className=''>
                <div className=' flex justify-center items-center mt-2'>
                    <Link to="/"><button className="btn btn-outline btn-error justify-center items-center">Back To Home</button></Link>

                </div>
            </div>

            <div className='body'>
                <div className='container'>
                    <div className='ring '></div>
                    <div className='ring '></div>
                    <div className='ring '></div>
                    {/* <span className='loading'>404</span> */}
                    <h1 className='text-white font-bold text-2xl'>404</h1><br />


                </div>

            </div>

        </div>
    );
};

export default Pictures;