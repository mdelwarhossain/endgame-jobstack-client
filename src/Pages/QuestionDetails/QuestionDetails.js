import React from 'react';
import Option from '../Option/Option';
import { toast } from "react-hot-toast";
import { BsEyeFill } from "react-icons/bs";


const QuestionDetails = ({ questionDetails }) => {
    const { id, question, options, correctAnswer } = questionDetails;
    const notify = (correctAnswer) => toast(correctAnswer);
    return (
        <div>




            <div className=" ml-7 mr-7 bg-amber-50 rounded-md shadow-2xl text-primary-content my-5 ">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-red-900 font-bold text-xl'>{question}</h5>

                        </div>
                        <div>
                            <button className='btn text-white  bg-[#2E8B57] mt-2 rounded hover:bg-green-900 text-white font-bold btn-sm ' onClick={() => notify(correctAnswer)}>
                                <BsEyeFill className='' />Correct Answer</button>
                        </div>

                    </div >

                    <div className='text-teal-700 font-semibold'>
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