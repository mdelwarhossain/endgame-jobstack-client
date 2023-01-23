import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
const Hire = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const handleAddJob = data => {

        const jobPost = {
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
        console.log(jobPost);

        // save product to the database
        fetch('http://localhost:5000/addajob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(jobPost)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.title} is added successfully`);
                // navigate('/dashboard/books/:email')
            })
    }

    return (
        <div className="px-4 grid grid-cols-1 md:grid-cols-8 gap-4">
            <div className="col-span-2 mt-5">
            <div className="">
            <div className='flex gap-4 ml-2 mt-2'>
                <img className='h-10 w-10 rounded-full' src={user?.image} alt="" />
                <span className='flex gap-2 mt-2'> {user?.displayName}</span>
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <Link to={`/job/${user?.email}`} className='btn btn-outline btn-primary'>My Posts</Link>
                <Link to='/addajob' className='btn btn-outline btn-primary'>Add a job</Link>

            </div>
        </div>
            </div>
            <div className="col-span-6">
                <div className='p-7'>
                    <h2 className="text-4xl my-10 bg-gray-200 p-2">Looking for qualified candidate?</h2>
                    <p className='text-4xl font-bold mb-10 text-primary'>Simply Post Your Job</p>
                    <form onSubmit={handleSubmit(handleAddJob)}>
                        <div className="md:flex w-full gap-4">
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label w-full  "> <span className="label-text">Title</span></label>
                                    <input type="text" {...register("title", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input type="text" {...register("location", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.location && <p className='text-red-500'>{errors.title.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Job Type</span></label>
                                    <select type="text" {...register("jobType", {
                                        required: true
                                    })} className="input input-bordered w-full ">
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Intership</option>
                                    </select>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <input type="text" {...register("category", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Home Office</span></label>
                                    <select type="text" {...register("homeOffice", {
                                        required: true
                                    })} className="input input-bordered w-full ">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Availability</span></label>
                                    <input type="text" {...register("availability", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.availability && <p className='text-red-500'>{errors.availability.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Job URL</span></label>
                                    <input type="text" {...register("url", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.url && <p className='text-red-500'>{errors.url.message}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Vacancy</span></label>
                                    <input type="number" {...register("vacancy", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.vacancy && <p className='text-red-500'>{errors.vacancy.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Salary</span></label>
                                    <input type="text" {...register("salary", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.salary && <p className='text-red-500'>{errors.salary.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Skills</span></label>
                                    <input type="text" {...register("skills", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.skills && <p className='text-red-500'>{errors.skills.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">About Us</span></label>
                                    <input type="text" {...register("aboutUs", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.aboutUs && <p className='text-red-500'>{errors.aboutUs.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Task</span></label>
                                    <input type="text" {...register("task", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.task && <p className='text-red-500'>{errors.task.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Profile</span></label>
                                    <input type="text" {...register("profile", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.profile && <p className='text-red-500'>{errors.profile.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">offer</span></label>
                                    <input type="text" {...register("offer", {
                                        required: "offer is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.offer && <p className='text-red-500'>{errors.offer.message}</p>}
                                </div>
                            </div>
                        </div>
                        <input className='btn btn-primary w-1/2 mt-4' value="Post" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hire;