import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from './AuthProvider';

export const InfoContext = createContext();

const UserInfoProvider = ({children}) => {

    const { user } = useContext(AuthContext);
    // console.log(user)
    const [userDetails, setUserDetails] = useState();




  useEffect(() =>{

    fetch(`https://endgame-jobstack-server.vercel.app/user/${user?.email}`)
    .then((res)=>{
        if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
    } )
    .then(data => setUserDetails(data))
  },[user?.email])



const details = {

    userDetails,

}
// console.log(userDetails)

    return (
        <InfoContext.Provider value={details}>
            {children}
        </InfoContext.Provider>
    );
};

export default UserInfoProvider;