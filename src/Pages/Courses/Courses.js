import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const [AllData, setAllData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/Course`)
        .then(res=>res.json())
        .then(data=> setAllData(data))
    },[])
    
    const [courseData, setCourseData] = useState(null)

   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 my-14 px-24'>
                {AllData?.map(data => <div
                    key={data._id}
                    class=" grid place-items-center font-mono">
                    <div class="bg-white h-84 rounded-md shadow-2xl">
                        <div class="flex justify-center items-center leading-none">
                            <img
                                src={data.image}
                                alt="pic"
                                class="h-40  rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                            />
                        </div>
                        <div class="p-3">
                            <p class="block mb-1 text-2xl font-bold">{data.name}</p>
                            <p class="text-md font-semibold tracking-tighter">
                                {data.authority}
                            </p>
                        </div>
                        <div class="p-2">
                            <label onClick={() => setCourseData(data)} htmlFor="course-modal" className='btn btn-sm'>Start Course</label>
                        </div>
                    </div>
                </div>)}
            </div>
            <SingleCourse
                courseData={courseData}
            ></SingleCourse>
        </div>
    );
};

export default Courses;