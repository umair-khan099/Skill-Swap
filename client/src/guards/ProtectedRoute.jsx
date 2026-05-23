/**
 * Application / State Layer: Protected Route Guard
 * Blocks access to private routes for unauthenticated users.
 */
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../features/auth/store/authSlice';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    console.log('[Auth Guard] User not authenticated. Redirecting to /login...');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
