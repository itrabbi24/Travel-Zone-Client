import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    console.log(location);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/sign-in" replace={true} ></Navigate>;
};

export default PrivateRoute;