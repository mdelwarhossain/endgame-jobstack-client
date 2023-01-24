import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
const Hire = ({ myPost, setMyPost }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const {title, location, jobType, category, homeOffice, availability, skills, aboutUs, task, profile, offer, vacancy, url, salary} = myPost; 
    const handleEditJob = data => {

        const jobPost = {
            id: myPost._id,
            name: user.name,
            logo: user.logo,
            email: user.email,
            title: data.title,
            location: data.location,
            jobType: data.jobType,
            category: data.category,
            homeOffice: data.homeOffice,
            availability: data.availability,
            skills: data.skills,
            aboutUs: data.aboutUs,
            task: data.task,
            profile: data.profile,
            offer: data.offer,
            vacancy: data.vacancy,
            url: data.url,
            salary: data.salary,
            postedOn: new Date()
        }
        console.log(data);

        // edit post to the database
        fetch('http://localhost:5000/editajob', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(jobPost)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.title} is updated successfully`);
                // navigate('/dashboard/books/:email')
                setMyPost(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="edit-job-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-job-modal" className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => setMyPost(null)}>✕</label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <div>
                        <p className='text-4xl font-bold text-center my-10'>Edit Your Job Post</p>
                    </div>
                    <form onSubmit={handleSubmit(handleEditJob)}>
                        <div className="md:flex w-full gap-4">
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label w-full  "> <span className="label-text">Title</span></label>
                                    <input placeholder={title} type="text" {...register("title", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input placeholder={location} type="text" {...register("location", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.location && <p className='text-red-500'>{errors.title.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Job Type</span></label>
                                    <select type="text" {...register("jobType", {
                                        required: true
                                    })} className="input input-bordered w-full ">
                                        <option>{jobType}</option>
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Intership</option>
                                    </select>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <input placeholder={category} type="text" {...register("category", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Home Office</span></label>
                                    <select type="text" {...register("homeOffice", {
                                        required: true
                                    })} className="input input-bordered w-full ">
                                        <option>{homeOffice}</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Availability</span></label>
                                    <input placeholder={availability} type="text" {...register("availability", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.availability && <p className='text-red-500'>{errors.availability.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Job URL</span></label>
                                    <input placeholder={url} type="text" {...register("url", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.url && <p className='text-red-500'>{errors.url.message}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Vacancy</span></label>
                                    <input placeholder={vacancy} type="number" {...register("vacancy", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.vacancy && <p className='text-red-500'>{errors.vacancy.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Salary</span></label>
                                    <input placeholder={salary} type="text" {...register("salary", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.salary && <p className='text-red-500'>{errors.salary.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Skills</span></label>
                                    <input placeholder={skills} type="text" {...register("skills", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.skills && <p className='text-red-500'>{errors.skills.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">About Us</span></label>
                                    <input placeholder={aboutUs} type="text" {...register("aboutUs", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.aboutUs && <p className='text-red-500'>{errors.aboutUs.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Task</span></label>
                                    <input placeholder={task} type="text" {...register("task", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.task && <p className='text-red-500'>{errors.task.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Profile</span></label>
                                    <input placeholder={profile} type="text" {...register("profile", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.profile && <p className='text-red-500'>{errors.profile.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">offer</span></label>
                                    <input placeholder={offer} type="text" {...register("offer", {
                                        required: "offer is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.offer && <p className='text-red-500'>{errors.offer.message}</p>}
                                </div>
                            </div>
                        </div>
                        <input className='btn btn-primary w-full mt-4' value="Post" type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Hire;