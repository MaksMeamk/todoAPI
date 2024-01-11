import React from 'react'
import { Navigate } from "react-router-dom";
const RouteTokenTrue = ({ children }) => {
    return localStorage.getItem('token') ? <Navigate to={'/tasks'} /> : children
}
export default RouteTokenTrue;