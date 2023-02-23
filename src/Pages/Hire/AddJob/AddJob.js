import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
const Hire = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostKey = "675b75aac107bbf9360ca2e17bf94edc";

    const handleAddJob = data => {
        const image = data.logo[0];
        console.log(image)

        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const jobPost = {
                        name: data.name,
                        logo: imgData.data.url,
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
                    fetch('https://endgame-jobstack-server.vercel.app/addajob', {
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
                        })
                }
            })
    }

    return (
        <section className='md:mx-28'>
                <div className="allContainer">
                    <div className='p-7'>
                        <div className='bg-green-700 text-white rounded-md p-4'>
                            <h2 className="text-2xl md:text-5xl p-2 md:p-4 font-bold">Looking for qualified candidate?</h2>
                            <p className='text-lg md:text-4xl p-2 md:p-4 font-semibold'>Simply Post Your Job</p>
                        </div>
                        <form onSubmit={handleSubmit(handleAddJob)} data-theme="night" className='p-4 md:p-10 rounded-md'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className=''>
                                    <div className="form-control w-full">
                                        <label className="label w-full "> <span className="label-text text-white">Company Name</span></label>
                                        <input type="text" {...register("company", {
                                            required: "Name is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.company && <p className='text-red-500'>{errors.company.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label w-full  "> <span className="label-text text-white">Company Logo</span></label>
                                        <input type="file" {...register("logo", {
                                            required: "Name is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.logo && <p className='text-red-500'>{errors.logo.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label w-full  "> <span className="label-text text-white">Title</span></label>
                                        <input type="text" {...register("title", {
                                            required: "Name is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Location</span></label>
                                        <input type="text" {...register("location", {
                                            required: "Name is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.location && <p className='text-red-500'>{errors.title.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Job Type</span></label>
                                        <select type="text" {...register("jobType", {
                                            required: true
                                        })} className="input input-bordered input-success w-full">
                                            <option>Full-time</option>
                                            <option>Part-time</option>
                                            <option>Intership</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Category</span></label>
                                        <input type="text" {...register("category", {
                                            required: "Name is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Home Office</span></label>
                                        <select type="text" {...register("homeOffice", {
                                            required: true
                                        })} className="input input-bordered input-success w-full">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Availability</span></label>
                                        <input type="text" {...register("availability", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.availability && <p className='text-red-500'>{errors.availability.message}</p>}
                                    </div>

                                </div>
                                <div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Job URL</span></label>
                                        <input type="text" {...register("url", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.url && <p className='text-red-500'>{errors.url.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Vacancy</span></label>
                                        <input type="number" {...register("vacancy", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.vacancy && <p className='text-red-500'>{errors.vacancy.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Salary</span></label>
                                        <input type="text" {...register("salary", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.salary && <p className='text-red-500'>{errors.salary.message}</p>}
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Skills</span></label>
                                        <input type="text" {...register("skills", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.skills && <p className='text-red-500'>{errors.skills.message}</p>}
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">About Us</span></label>
                                        <input type="text" {...register("aboutUs", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.aboutUs && <p className='text-red-500'>{errors.aboutUs.message}</p>}
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Task</span></label>
                                        <input type="text" {...register("task", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.task && <p className='text-red-500'>{errors.task.message}</p>}
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">Profile</span></label>
                                        <input type="text" {...register("profile", {
                                            required: true
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.profile && <p className='text-red-500'>{errors.profile.message}</p>}
                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white">offer</span></label>
                                        <input type="text" {...register("offer", {
                                            required: "offer is Required"
                                        })} className="input input-bordered input-success w-full" />
                                        {errors.offer && <p className='text-red-500'>{errors.offer.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <input className='btn btn-primary w-full rounded-2xl text-white font-bold mt-4' value="Post" type="submit" />
                        </form>
                    </div>
                    <Link to='/hire' className='btn btn-outline btn-primary mb-5 text-center flex items-center md:w-1/4 mx-auto'>back</Link>
                </div>
        </section>
    );
};

export default Hire;