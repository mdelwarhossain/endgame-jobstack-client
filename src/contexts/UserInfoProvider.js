import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from './AuthProvider';

export const InfoContext = createContext();

const UserInfoProvider = ({children}) => {

    const { user } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState();


  // console.log(user)


  const {
    data: userData = [],
    isLoading,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://jobstack-server.vercel.app/usersQueryEmail?email=${user?.email}`
      );
      const data = await res.json();
      setUserDetails(data[0]);
      
      return data;
    },
  });

  console.log(userDetails)



const details = {

    userDetails,

}

    return (
        <InfoContext.Provider value={details}>
            {children}
        </InfoContext.Provider>
    );
};

export default UserInfoProvider;