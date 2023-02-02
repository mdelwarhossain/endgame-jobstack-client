import React from 'react';
import { toast } from "react-hot-toast";



const Option = ({ option, id, correctAnswer }) => {

    const ans = () => {
        if (correctAnswer === option) {
            toast.success("Wow so easy!");

        }
        else {
            toast.error('Wrong answer')
        }
    }
    return (
        <div>
            <div>
                {/* <input onClick={ans} type="radio" name={`${id}`} id='anything' />{option} */}

                <p>
                    <input className='text-center' onClick={ans} type="radio" value="option" name={id} />{" "}
                    <span className='text-center' >{option}</span>
                </p>
            </div>

        </div>

    );
};

export default Option;