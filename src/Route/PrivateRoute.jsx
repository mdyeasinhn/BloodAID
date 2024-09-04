import { Children, useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }
    if (user) {
        return children
    } else {

        return <Navigate to='/login' state={location.pathname} replace></Navigate>
    }
};

export default PrivateRoute;