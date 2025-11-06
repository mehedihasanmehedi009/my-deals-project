 import React, {  useContext } from 'react';
 
import { Navigate, useLocation } from 'react-router';
import { Authcontext } from '../context/authprovider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    // console.log(user)

    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;