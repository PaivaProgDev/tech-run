import Loading from '../components/Global/Loading';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth()

    if (loading) return <Loading />

    return isAuthenticated ? children : <Navigate to={'/login'} replace />
}

export default PrivateRoute;
