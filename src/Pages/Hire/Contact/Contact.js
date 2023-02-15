import React, { useContext, useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const Contact = () => {
    const {user} = useContext(AuthContext); 
    const data = useLoaderData(); 
console.log(data);
const navigate = useNavigate(); 
const { data: userDetails, } = useQuery({
    queryKey: [''],
    queryFn: async () => {
        try {
            const res = await fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            const data = await res.json();
            return data;
        } catch (error) { }
    },
});
console.log(userDetails);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('jobstack123', 'template_sfi7gnl', form.current, 'l5vhANlvQq6cUUfjV')
            .then((result) => {
                console.log(result.text);
                toast.success('message has been sent successfully')
                navigate('/hire')
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });
        e.target.reset()
    };

    return (
        <div className="md:w-2/3 mx-auto my-10">
            <div className="w-full shadow-2xl">
                <form ref={form} onSubmit={sendEmail} className="card-body">
                <h1 className='text-5xl font-bold text-center'>Reach {data?.name}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='senderName' type="text" value={userDetails?.name} className="input input-bordered" />
                    </div>
                    <div className="form-control hidden">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='receiverName' type="text" value={data?.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='senderEmail' type="text" value={userDetails?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control hidden">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='receiverEmail' type="text" value={data?.email} className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name='message' className="textarea textarea-bordered w-full" placeholder="write your message here..."></textarea>
                    </div>
                    <button className="btn btn-active btn-accent">Button</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;