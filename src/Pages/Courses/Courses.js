import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardLoader from '../../Shared/LoadingPage/CardLoader/CardLoader';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const [AllData, setAllData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/Course`)
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setIsLoading(false)
            })
    }, [])

    const [courseData, setCourseData] = useState(null)


    return (
        <div className='allContainer'>
            {
                isLoading ? <CardLoader></CardLoader> :

                    <div>
                        <div className='py-6 '>
                            <h1 className='text-4xl font-bold text-center my-10'>Courses We Provide</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-5 gap-14 px-24'>
                            {AllData?.map(data => <div
                                key={data._id}
                                className=" grid place-items-center font-mono">
                                <div className="bg-white h-84 rounded-md shadow-2xl">
                                    <div className="flex justify-center items-center leading-none">
                                        <img
                                            src={data.image}
                                            alt="pic"
                                            className="h-40  rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <p className="block mb-1 text-2xl font-bold">{data.name}</p>
                                        <p className="text-md font-semibold tracking-tighter">
                                            {data.authority}
                                        </p>
                                    </div>
                                    <div className="p-2">
                                        <label onClick={() => setCourseData(data)} htmlFor="course-modal" className='btn   bg-[#2E8B57] mt-2 rounded hover:bg-green-900 text-white font-bold btn-sm'>Start Course</label>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <SingleCourse
                            courseData={courseData}
                        ></SingleCourse>
                    </div>
            }
        </div>
    );
};

export default Courses;