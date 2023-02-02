import React from 'react';
import Option from '../Option/Option';
import { toast } from "react-hot-toast";
import { BsEyeFill } from "react-icons/bs";


const QuestionDetails = ({ questionDetails }) => {
    const { id, question, options, correctAnswer } = questionDetails;
    const notify = (correctAnswer) => toast(correctAnswer);
    return (
        <div>




            <div className=" w-full bg-amber-50 rounded-md shadow-2xl text-primary-content my-10 ">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-teal-800 font-bold text-xl'>{question}</h5>

                        </div>
                        <div>
                            <button className='btn text-white  bg-gradient-to-r from-green-400 to-blue-400 ' onClick={() => notify(correctAnswer)}>
                                <BsEyeFill className='' />Correct Answer</button>
                        </div>

                    </div >

                    <div className='text-red-700'>
                        {
                            options.map((option, index) => <Option
                                key={index}
                                option={option}
                                id={id}
                                correctAnswer={correctAnswer}

                            ></Option>)
                        }
                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetails;