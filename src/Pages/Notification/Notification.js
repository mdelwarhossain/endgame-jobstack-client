import React from 'react';
import Courses from '../NewsFeed/LeftSideCard/Courses/Courses';
import LeftSideCard from '../NewsFeed/LeftSideCard/LeftSideCard';
import Sponsored from '../NewsFeed/LeftSideCard/Sponsored/Sponsored';
import Modal from './Modal';
import logo1 from '../../assest/images/logo1.webp'
import logo2 from '../../assest/images/logo2.png'
import logo3 from '../../assest/images/logo3.png'
import logo4 from '../../assest/images/logo4.png'
import logo5 from '../../assest/images/logo5.png'
import logo6 from '../../assest/images/logo6.png'
import logo7 from '../../assest/images/logo7.webp'
import logo8 from '../../assest/images/logo8.png'
import logo9 from '../../assest/images/logo9.png'
import logo10 from '../../assest/images/logo10.png'
import RightSideCard from '../NewsFeed/RightSideCard/RightSideCard';

const Notification = () => {
    return (
        <div className="newsFeed px-4 grid grid-cols-1 md:grid-cols-8 gap-2">
            <div className="hidden md:block col-span-2">
                <LeftSideCard></LeftSideCard>
                <Courses></Courses>
                <Sponsored></Sponsored>
            </div>
            <div className="col-span-4 mt-5 card w-full bg-base-100 shadow-xl p-5">
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo1} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>IT Inova recruiting actively.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>now</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo2} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Creative IT hiring actively.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>50m</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo3} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Your profile showed in 7 serch result</p>
                        <p className='btn btn-ghost'>Check Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>1h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo4} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Jobstack members are sharing their unpaid intern experience.</p>
                        <p className='btn btn-ghost'>Have a look</p>
                    </div>
                    <div className='col-span-1'>
                        <p>2h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo5} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Meionsa is looking for mern stack developer.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>2h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo6} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>To boost your skills attend the courses</p>
                        <p className='btn btn-ghost'>Visit Courses Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>4h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo7} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Job Alert! 15 new job post.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>4h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo8} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Corianka is looking for react developer.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>5h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo9} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Job Alert! new job post for full stack developer</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>8h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 my-2'>
                    <div className="avatar col-span-1">
                        <div className="w-16 rounded">
                            <img src={logo10} alt='' />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p>Aw Group is actively hiring backend developer.</p>
                        <p className='btn btn-ghost'>Apply Now</p>
                    </div>
                    <div className='col-span-1'>
                        <p>12h</p>
                        <label htmlFor="notification-modal" className='btn btn-ghost'>...</label>
                        <Modal></Modal>
                    </div>
                </div>
            </div>
            <div className="hidden p-1 shadow-xl md:block col-span-2">
                <RightSideCard></RightSideCard>
            </div>
        </div>
    );
};

export default Notification;