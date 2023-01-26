import React from 'react';
import { Link } from 'react-router-dom';
import hBanner from '../../../assest/images/hiringBanner.jpg'
const HiringBanner = () => {
    return (
        <div className='shadow-2xl'>
            <Link to='/jobs'>
             <img src={hBanner} alt="" />
             <p>See Who's hiring</p>
            </Link>
        </div>
    );
};

export default HiringBanner;