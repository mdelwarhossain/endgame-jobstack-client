import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
const AddJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostKey = "675b75aac107bbf9360ca2e17bf94edc";

    const handleAddJob = data => {
        const image = data.logo[0];
        console.log(image)


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
        fetch('https://jobstack-server.vercel.app/addajob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(jobPost)
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
            })
    }

    return (
        <div className="px-4 grid grid-cols-1 md:w-2/3 mx-auto">
            {/* <div className="col-span-2 mt-5">
                <div className="">
                    <div className='flex gap-4 ml-2 mt-2'>
                        <img className='h-10 w-10 rounded-full' src={user?.image} alt="" />
                        <span className='flex gap-2 mt-2'> {user?.displayName}</span>
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                        <Link to={`/jobs/${user?.email}`} className='btn btn-outline btn-primary'>My Posts</Link>
                        <Link to='/addajob' className='btn btn-outline btn-primary'>Add a job</Link>

                    </div>
                </div>
            </div> */}
            <div className="">
                <div className='p-7'>
                    <h2 className="text-4xl my-10 bg-gray-200 p-2">Looking for qualified candidate?</h2>
                    <p className='text-4xl font-bold mb-10 text-primary'>Simply Post Your Job</p>
                    <form onSubmit={handleSubmit(handleAddJob)}>
                        <div className="md:flex w-full gap-4">
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label w-full  "> <span className="label-text">Company Name</span></label>
                                    <input type="text" {...register("company", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.company && <p className='text-red-500'>{errors.company.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label w-full  "> <span className="label-text">Company Logo</span></label>
                                    <input type="file" {...register("logo", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full " />
                                    {errors.logo && <p className='text-red-500'>{errors.logo.message}</p>}
                                </div>
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

                            </div>
                            <div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Job URL</span></label>
                                    <input type="text" {...register("url", {
                                        required: true
                                    })} className="input input-bordered w-full " />
                                    {errors.url && <p className='text-red-500'>{errors.url.message}</p>}
                                </div>
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
                <Link to='/hire' className='btn btn-outline btn-primary mb-5 text-center flex items-center md:w-1/4 mx-auto'>back</Link>
            </div>
        </div>
    );
};

export default AddJob;