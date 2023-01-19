import React from 'react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { SiReactivex } from 'react-icons/si';
import { GrBookmark } from 'react-icons/gr';
import enfusion from '../../../assest/images/enfusion.jpg'
import hirewell from '../../../assest/images/hire.png'
import timego from '../../../assest/images/timego.jpg'
import Vietnam from '../../../assest/images/vietnam.jpg'
import wipro from '../../../assest/images/wipro.png'
import optimizely from '../../../assest/images/optimizely.png'
import './RightSideCard.css'

const RightSideCard = () => {
    return (
        <div>
            <p className='text-center my-5 text-xl font-extrabold'>Recent Jobs <BsFillBriefcaseFill className='inline'/></p>
            <hr className='text-red-600' />
            <div className='my-5 shadow-xl'>
                <p className='text-xl font-bold'>Frontend developer</p>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={enfusion} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://enfusion.com/">Jr FrontEnd Developer</a>
                            <p className='font-bold'>Enfusion</p>
                            <p><small>Chicago, IL</small></p>
                            <p><small>1 benefit</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                        <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={hirewell} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://hirewell.com/"> FrontEnd Developer</a>
                            <p className='font-bold'>Hirewell</p>
                            <p><small>New York, NY (Hybrid)</small></p>
                            <p><small>$140K/yr - $180K/yr</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                    <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
            </div>

            <div className='my-5 shadow-xl'>
                <p className='text-xl font-bold'>Remote opportunities</p>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={timego} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://www.linkedin.com/company/timego-market-ltd/?trk=similar-pages&originalSubdomain=rs">Developer</a>
                            <p className='font-bold'>TimeGo Dev Ltd</p>
                            <p><small>Bangladesh (Remote)</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                    <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={Vietnam} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://9cv9.com/">Technical Recruiter</a>
                            <p className='font-bold'>9cv9 | Vietnam Number One Career Platform</p>
                            <p><small>Bangladesh (Remote)</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                    <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
            </div>
            <div className='my-5 shadow-xl'>
                <p className='text-xl font-bold'>Hiring in your network</p>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={wipro} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://www.wipro.com/">Cisco ACI Network Engineer</a>
                            <p className='font-bold'>Wipro</p>
                            <p><small>Dhaka, Bangladesh (Hybrid)</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                    <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
                <div className='flex my-5  p-5 justify-between'>
                    <div className='jobs'>
                        <img src={optimizely} alt="" />
                        <div>
                            <a className='underline font-bold text-blue-600' href="https://www.optimizely.com/">Senior Software Engineer- JavaScript</a>
                            <p className='font-bold'>Optimizely</p>
                            <p><small>Dhaka, Bangladesh (Remote)</small></p>
                            <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
                        </div>
                    </div>
                    <div>
                    <GrBookmark className='inline'></GrBookmark>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSideCard;