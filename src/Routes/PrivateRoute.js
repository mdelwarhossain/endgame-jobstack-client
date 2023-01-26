import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(user)

    if(loading){
        return <div className='flex items-center justify-center'>
            <div className="w-16  h-16 border-4 border-dashed rounded-full animate-spin
         dark:border-violet-400"></div>
        </div>
    }


    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

    // if (user) {
    //     return children;
    // }

    // return (
    //     <Navigate to='/login'></Navigate>
    // );
};

export default PrivateRoute;