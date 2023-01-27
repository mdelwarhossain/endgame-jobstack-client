import React from 'react';

const Courses = () => {
    return (
        <div>
            <h1>courses</h1>

            <label htmlFor="bookingCourses" className="btn btn-outline btn-success">Courses</label>
            <input type="checkbox" id="bookingCourses" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingCourses" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1>Select Courses</h1>
                    <form className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" placeholder="Name" className="file-input-bordered input w-full " />
                        <input type="text" placeholder="Image" className="file-input-bordered input w-full " />
                        <input type="text" placeholder="Link" className="file-input-bordered input w-full " />

                        <br />
                        <input className='w-full btn btn-success' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Courses;