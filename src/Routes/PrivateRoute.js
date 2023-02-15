import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import CardLoader from '../Shared/LoadingPage/CardLoader/CardLoader';
import LoadingPage from '../Shared/LoadingPage/LoadingPage';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(user)

    if(loading){
        return <CardLoader></CardLoader>
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