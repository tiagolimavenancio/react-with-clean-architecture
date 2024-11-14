import { useAuthContext } from "context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useAuthContext();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export { ProtectedRoute };
