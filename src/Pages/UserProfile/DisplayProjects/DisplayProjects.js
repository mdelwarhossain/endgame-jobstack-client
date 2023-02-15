import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import UserProjects from '../UserProjects/UserProjects';

const DisplayProjects = () => {

    const [userProjects, setUserProjects] = useState()
    const {user} = useContext(AuthContext)
    

    const {
        data: projects= [],
        refetch,
        isLoading,
    
      } = useQuery({
        queryKey: ["projects", user?.email],
        queryFn: async () => {
          const res = await fetch(
            `https://endgame-jobstack-server.vercel.app/projects/${user?.email}`
          );
          const data = await res.json();
          setUserProjects(data)
          console.log(data);
          return data;
        },
      });

    return (
        <div className='shadow-lg'>
            <div className="mt-6 flex justify-between  p-6">
              <div>
              <h2 className="text-2xl font-bold mb-2">Projects</h2>
              {
                projects.length === 0 && "Add Projects"
              }
              {
                userProjects?.map(project => <div className="my-5" key={project._id}>
                  {/* <h3 className="text-xl mb-2  font-extrabold">{project.projectName}</h3> */}
                  <p className="mb-2 font-semibold">{project.projectName}</p>
                  <p className="mb-2 "><span>{project.startDate}</span> - <span>{project.endDate}</span></p>
                  <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/docs/flex-direction"><button  className="btn btn-outline mb-5 btn-info">Show Project <FaExternalLinkAlt className="ml-2"/></button></a>
                  <p>{project.projectDescription}</p>
                </div>)
              }
              </div>
              <label htmlFor="projects-modal"><BsPlusLg className="cursor-pointer"></BsPlusLg></label>
            </div>
            <UserProjects
            refetch={refetch}
            ></UserProjects>
            </div>
    );
};

export default DisplayProjects;