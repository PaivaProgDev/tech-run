import Loading from '../components/Global/Loading';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth()

    return isAuthenticated ? <Navigate to={'/dashboard'} replace /> : children
}

export default PublicRoute;
