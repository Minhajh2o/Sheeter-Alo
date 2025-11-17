import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../provider/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-white">
        <span className="loading loading-dots loading-lg text-sky-200" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
