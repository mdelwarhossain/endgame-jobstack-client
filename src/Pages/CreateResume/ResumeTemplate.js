import jsPDF from 'jspdf';
import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ResumeTemplate = () => {
    const data = useLoaderData(); 
    console.log(data);
    const {user} = useContext(AuthContext); 

    const generatePDF = () => {
        const doc = new jsPDF("p","pt","a4"); 
        doc.html(document.querySelector('#content'), {
          callback: function(pdf){
            const pageCount = doc.internal.getNumberOfPages(); 
            // pdf.deletePage(pageCount); 
            pdf.save('myresume.pdf')
          }
  
        })
  
      }

    return (
        <section id='content' className='py-20 mx-60'>
            <div className='mt-10'>
                {/* header part */}
                <div className='text-center'>
                    <h2 className='text-4xl font-bold'>{data?.name}</h2>
                    <h4 className='text-sm font-semibold text-gray-800'>{data?.headline}</h4>
                    <div className='flex items-center justify-center my-4'>
                        <p className='mr-3 text-lg font-semibold'>{data?.city} {data?.country}</p>
                        <p className='mr-3 text-lg font-semibold'>{data?.email}</p>
                        <p className='mr-3 text-lg font-semibold'>01845627586</p>
                        <a className='mr-3 text-lg font-semibold' href='/'>Linkdin</a>
                        <a className='text-lg font-semibold' href="/">Portfolio</a>
                    </div>
                </div>

                {/* skills part */}
                <div>
                    <hr
                        style={{
                            marginTop: "12px",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />
                    <h2 className='text-3xl text-start p-2 font-semibold'>SKILLS</h2>
                    <hr
                        style={{
                            marginTop: "",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />

                    <div className='mt-6 text-start'>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-semibold mr-4'>Language : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-semibold mr-4'>Frameworks : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-semibold mr-4 '>Technologies : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-semibold mr-4'>Database : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-semibold mr-4'>Tools : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                    </div>
                </div>

                {/* Project part */}
                <div>
                    <hr
                        style={{
                            marginTop: "12px",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />
                    <h2 className='text-3xl text-start p-2 font-semibold'>Projects</h2>
                    <hr
                        style={{
                            marginTop: "",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />

                    {/* project name start*/}
                    <div>
                        <h2 className='text-md font-semibold'>AUTOCAR – A AUTOCAR RESELLING WEBSITE</h2>
                        <div className='flex items-center my-1'>
                            <a className='mr-2 text-blue-600' href="/">Live site | </a>
                            <a className='mr-2 text-blue-600' href="/">github (client site ) | </a>
                            <a className='mr-2 text-blue-600' href="/">github (server site)</a>
                        </div>

                        <div>
                            <p className='text-black'>1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                        </div>

                        <div className='flex items-center'>
                            <h2 className='text-sm font-semibold mr-3'>Technology used : </h2>
                            <p className='text-md mt-1'>Html, css, javascript, react js</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-md font-semibold'>AUTOCAR – A AUTOCAR RESELLING WEBSITE</h2>
                        <div className='flex items-center my-1'>
                            <a className='mr-2 text-blue-600' href="/">Live site | </a>
                            <a className='mr-2 text-blue-600' href="/">github (client site ) | </a>
                            <a className='mr-2 text-blue-600' href="/">github (server site)</a>
                        </div>

                        <div>
                            <p className='text-black'>1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                        </div>

                        <div className='flex items-center'>
                            <h2 className='text-md font-semibold mr-3'>Technology used : </h2>
                            <p className='text-sm mt-1'>Html, css, javascript, react js</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-md font-semibold'>AUTOCAR – A AUTOCAR RESELLING WEBSITE</h2>
                        <div className='flex items-center my-1'>
                            <a className='mr-2 text-blue-600' href="/">Live site | </a>
                            <a className='mr-2 text-blue-600' href="/">github (client site ) | </a>
                            <a className='mr-2 text-blue-600' href="/">github (server site)</a>
                        </div>

                        <div>
                            <p className='text-black'>1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sit!</p>
                            <p className='text-black'>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta tempora iste voluptate sed totam magni quae eaque sint!</p>
                        </div>

                        <div className='flex items-center'>
                            <h2 className='text-md font-semibold mr-3'>Technology used : </h2>
                            <p className='text-sm mt-1'>Html, css, javascript, react js</p>
                        </div>
                    </div>
                </div>

                {/* Education part */}
                <div>
                    <hr
                        style={{
                            marginTop: "12px",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />
                    <h2 className='text-3xl text-start p-2 font-semibold'>Education</h2>
                    <hr
                        style={{
                            marginTop: "",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />

                    <div>
                        <p className='text-md'>{data?.school}</p>
                        <p className='text-md'>{data?.university}</p>
                    </div>
                </div>

                {/* Language part */}
                <div>
                    <hr
                        style={{
                            marginTop: "12px",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />
                    <h2 className='text-3xl text-start p-2 font-semibold'>Language</h2>
                    <hr
                        style={{
                            marginTop: "",
                            color: "#000000",
                            backgroundColor: "#000000",
                            height: 0.5,
                            borderColor: "#000000",
                        }}
                    />

                    <div className='flex items-center '>
                        <p className='text-md mr-3'>--Bangla (Native)</p>
                        <p className='text-md'>--English (Basic)</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-primary shadow-md mt-5 mr-5" onClick={generatePDF} type='primary'>download resume</button>
            {
                data?.email === user?.email &&
                <button className="btn btn-outline btn-primary shadow-md mt-5"><FaEdit></FaEdit>Edit Resume</button>
            }
        </section>
    );
};

export default ResumeTemplate;