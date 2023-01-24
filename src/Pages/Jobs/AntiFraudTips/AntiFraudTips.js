import React from 'react';
import { Link } from 'react-router-dom';

const AntiFraudTips = () => {
    return (
        <div className='md:w-2/3 mx-auto flex flex-col gap-5 my-10'>
            <div className='text-center p-2'>
                <h1 className='text-4xl font-bold '>How to avoid the <span className='text-error'>fraud</span></h1>
                <p className='my-3'>At Jobstack, we are committed to making your online experience a safe and reliable one. The following information is designed to help internship/job seekers identify common red flags and avoid fraud.</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'> Asking for money</h2>
                <p className='my-3'>If an employer asks you for money in the form of training fee, application/admission fee, security deposit, test fee, laptop fee, documentation fee, interview reservation fee, etc., please do not make any payment and report him/her immediatety. Charging money is not only a violation of Internshala's rules, it is often a scam.</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'>Discrepancy in job description</h2>
                <p className='my-3'>An employer could offer you a different job than what you had applied for on Internshala. If the job offered involves any of the following, please report it:
                    Consuming alcohol or smoking or inducing others to do so
                    Promoting explicit religious content, a particular religious personality, or a sect, etc
                    Gambling or related games
                    Network-level marketing - where your only role is to promote or sell a product or service to your friends and family
                    Watching or creating content for adult websites
                    Undertaking paid courses, workshops or training programmes as part of the internship/job</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'>Refusal to pay stipend/salary or issue certificate</h2>
                <p className='my-3'>On Internshala, jobs with CTC less than 2 LPA and unpaid internships are not allowed, unless explicitly mentioned so in the internship/job post. If you come across any such incident where the stipend/salary mentioned on Internshala and the offer letter do not match, do notify us.
There also might be a case where the employer might stop responding to you or refuse to pay you the promised salary/stipend or issue the certificate of completion, after you have performed the assigned work.</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'>Asking for irrelevant assignments</h2>
                <p className='my-3'>Any assignment that an employer asks you to do should assess your suitability for the role, and should be relevant to the profile.
Please report employers, if they asks you to do extremely lengthy assignments which may involve making business strategies for their company, writing multiple articles for their blog, promoting their social media accounts in your network, increasing downloads of their app, or designing multiple graphics for their company. These assignments may be a scheme by the company to get free work done.</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'>Asking for personal and bank details</h2>
                <p className='my-3'>Be cautious of employers who ask for details like PIN, pan card, bank account, credit card, OTP, Aadhar, etc., via online channels, in exchange for a ‘special offer’. This may be a scammer trying to obtain your information to impersonate you.
Legitimate employers would have had sufficient interaction with you through interviews and would have expressed interest in hiring you, before requesting personal information like bank account details, pan card and marksheets.</p>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2 bg-gray-200'>Hateful or abusive conduct</h2>
                <p className='my-3'>Employers are not allowed to make discriminatory or abusive comments about race, ethnicity, religious affiliation, sexual orientation or gender about any candidate. Any such attempt should be reported immediately.</p>
            </div>
            <div className='flex justify-between'>
                <Link className='btn btn-outline btn-primary' to='/jobs'>Back to Jobs</Link>
                <Link className='btn btn-outline btn-primary' to='/jobs'>Contact Us</Link>
            </div>
        </div>
    );
};

export default AntiFraudTips;