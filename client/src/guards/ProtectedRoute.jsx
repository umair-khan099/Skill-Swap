import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  return children;
};

export default ProtectedRoute;
