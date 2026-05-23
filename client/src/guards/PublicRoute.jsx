/**
 * Application / State Layer: Public Route Guard
 * Redirects logged-in users away from auth pages (Login/Register) to the dashboard.
 */
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../features/auth/store/authSlice';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    console.log('[Auth Guard] User already authenticated. Redirecting to /home...');
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
