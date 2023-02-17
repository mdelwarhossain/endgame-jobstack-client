import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from '../TopicsCard/TopicsCard';

const Quiz = () => {

    // const [loading, setLoading] = useState(true);

    const loaderData = useLoaderData()
    const quizData = loaderData.data;
    return (
        <div className='allContainer mx-6'>
        <div className='py-6'>
            <h1 className='text-4xl font-bold text-center my-10'>
                Test Your Knowledge with Our Interactive Quizzes
            </h1>
            <p className='text-xl  text-center'>
                Assess Your Skills with Our Range of Quiz Topics
            </p>
        </div>
    
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 my-14 '>
                {quizData?.map(quiz => (
                    <TopicsCard key={quiz.id} quiz={quiz}></TopicsCard>
                ))}
            </div>
        </div>
    </div>
    
    );
};

export default Quiz;

