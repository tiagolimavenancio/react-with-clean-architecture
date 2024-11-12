import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { ProtectedRoute };
