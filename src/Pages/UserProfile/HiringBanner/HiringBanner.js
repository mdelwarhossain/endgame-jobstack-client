import React from 'react';
import { Link } from 'react-router-dom';
import hBanner from '../../../assest/images/hiringBanner.jpg'
import { FaArrowRight } from 'react-icons/fa';
const HiringBanner = () => {
    return (
        <div className='border border-gray-300 rounded-lg'>
            <Link to='/jobs'>
             <img src={hBanner} alt="" />
             <p className='font-bold py-2'>See Who's hiring <FaArrowRight className='inline'/></p>
            </Link>
        </div>
    );
};

export default HiringBanner;