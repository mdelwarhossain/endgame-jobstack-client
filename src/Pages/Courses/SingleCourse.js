import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({ courseData }) => {
    return (
        <div>
    <input type="checkbox" id="course-modal" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box relative text-center">
            <label htmlFor="course-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-2xl font-bold">{courseData?.name}</h3>
            <div className="video-container">
                <iframe src={courseData?.Video} title="Iframe Example"></iframe>
            </div>
        </div>
    </div>
</div>
    );
};

export default SingleCourse;