import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserStatus } from '../../store/user/selectors';


const PublicRoute = () => {
    const isLogged = useSelector(getUserStatus)

    return (
        isLogged ? <Navigate to="/" /> : <Outlet/>
    );
};

export default PublicRoute;