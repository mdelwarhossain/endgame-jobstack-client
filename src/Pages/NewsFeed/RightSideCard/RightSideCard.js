import React from 'react';
import './RightSideCard.css'
import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';

const RightSideCard = () => {
    return (
        <div className='shadow-xl my-5 px-2 py-10'>
            <div className='flex items-center justify-between'>
                {/* <h2 className='ml-2 font-bold'>Add to your feed</h2> */}
                <p className='font-bold mb-2'>Add to Your Feed</p>
                <FaExclamation className='text-sm' />
            </div>
            <div className='mt-6'>
                <div className='flex items-center mb-6'>
                    <img alt="img" className="w-10 h-10 ml-4 mr-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                    <div>
                        <Link to='#'>
                            <h1 className='text-xl font-bold'>Md Mohsin</h1>
                            <h3 className='text-sm'>Hr Professional</h3>
                        </Link>
                        <Link to='#'>
                            <button className='btn btn-outline btn-error btn-sm mt-2'>
                                + Fllow
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center mb-6'>
                    <img alt="img" className="w-10 h-10 ml-4 mr-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                    <div>
                        <Link to='#'>
                            <h1 className='text-xl font-bold'>Zinedine Zidane</h1>
                            <h3 className='text-sm'>Coach Professional</h3>
                        </Link>
                        <Link to='#'>
                            <button className='btn btn-outline btn-error btn-sm mt-2'>
                                + Fllow
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center mb-6'>
                    <img alt="img" className="w-10 h-10 ml-4 mr-6 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                    <div>
                        <Link to='#'>
                            <h1 className='text-xl font-bold'>Cristiano Ronaldo</h1>
                            <h3 className='text-sm'>Football Professional</h3>
                        </Link>
                        <Link to='#'>
                            <button className='btn btn-outline btn-error btn-sm mt-2'>
                                + Fllow
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <Link to='/myconnections'>
                <h3 className='ml-3 underline mt-4'>View All recommendations <span className='font-bold'> &#8594; </span></h3>
            </Link>
        </div>

        // <div>
        //     <p className='text-center my-5 text-xl font-extrabold'>Recent Jobs <BsFillBriefcaseFill className='inline'/></p>
        //     <hr className='text-red-600' />
        //     <div className='my-5 shadow-xl'>
        //         <p className='text-xl font-bold'>Frontend developer</p>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={enfusion} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://enfusion.com/">Jr FrontEnd Developer</a>
        //                     <p className='font-bold'>Enfusion</p>
        //                     <p><small>Chicago, IL</small></p>
        //                     <p><small>1 benefit</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={hirewell} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://hirewell.com/"> FrontEnd Developer</a>
        //                     <p className='font-bold'>Hirewell</p>
        //                     <p><small>New York, NY (Hybrid)</small></p>
        //                     <p><small>$140K/yr - $180K/yr</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //             <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='my-5 shadow-xl'>
        //         <p className='text-xl font-bold'>Remote opportunities</p>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={timego} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://www.linkedin.com/company/timego-market-ltd/?trk=similar-pages&originalSubdomain=rs">Developer</a>
        //                     <p className='font-bold'>TimeGo Dev Ltd</p>
        //                     <p><small>Bangladesh (Remote)</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //             <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={Vietnam} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://9cv9.com/">Technical Recruiter</a>
        //                     <p className='font-bold'>9cv9 | Vietnam Number One Career Platform</p>
        //                     <p><small>Bangladesh (Remote)</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //             <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='my-5 shadow-xl'>
        //         <p className='text-xl font-bold'>Hiring in your network</p>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={wipro} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://www.wipro.com/">Cisco ACI Network Engineer</a>
        //                     <p className='font-bold'>Wipro</p>
        //                     <p><small>Dhaka, Bangladesh (Hybrid)</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //             <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //         <div className='flex my-5  p-5 justify-between'>
        //             <div className='jobs'>
        //                 <img src={optimizely} alt="" />
        //                 <div>
        //                     <a className='underline font-bold text-blue-600' href="https://www.optimizely.com/">Senior Software Engineer- JavaScript</a>
        //                     <p className='font-bold'>Optimizely</p>
        //                     <p><small>Dhaka, Bangladesh (Remote)</small></p>
        //                     <p><small><SiReactivex className='inline'/> Actively recruiting</small></p>
        //                 </div>
        //             </div>
        //             <div>
        //             <GrBookmark className='inline'></GrBookmark>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    );
};

export default RightSideCard;