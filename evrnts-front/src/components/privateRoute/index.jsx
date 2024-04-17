import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserStatus } from '../../store/user/selectors';


const PrivateRoute = () => {
    const isLogged = useSelector(getUserStatus)

    return (
        isLogged ? <Outlet/> : <Navigate to="/login" />
    );
};

export default PrivateRoute;