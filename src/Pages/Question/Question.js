import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../QuestionDetails/QuestionDetails';


const Question = () => {
    const { name, questions } = useLoaderData().data;
    return (
        <div className='all-container  '>
            <div className='text-center  '>
                <h4 className=' question-title text-3xl font-semibold pt-24'>Question of <span className='name text-green-700'>{name}</span> </h4>

            </div>
            <div className=''>

                {
                    questions.map(questionDetails => <QuestionDetails
                        key={questionDetails.id}
                        questionDetails={questionDetails}

                    ></QuestionDetails>)
                }
            </div>
        </div>
    );
};

export default Question;