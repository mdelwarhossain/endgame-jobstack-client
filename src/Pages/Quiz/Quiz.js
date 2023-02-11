import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from '../TopicsCard/TopicsCard';

const Quiz = () => {

    const loaderData = useLoaderData()
    const quizData = loaderData.data;
    return (
        <div className='bg-slate-100 allContainer'>

            <div>
                <div>

                    <h2 className=' py-6 text-center font-bold text-3xl'>Please Select your Quiz topic</h2>
                    <p></p>
                </div>
                {/* <div className='pb-4 pt-2 pl-20 bg-slate-100 grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 ml-24 '> */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 my-14 px-24 '>


                    {
                        quizData?.map(quiz => <TopicsCard
                            key={quiz.id}
                            quiz={quiz}
                        ></TopicsCard >)

                    }


                </div>

            </div>
        </div>
    );
};

export default Quiz;

