import { createContext, ReactNode, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Props = {
  children?: ReactNode;
};

type AuthContextProps = {
  user: object | null;
  login: (newState: string) => void;
  logout: () => void;
};

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initialState);

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("@App:user", null);

  const login = (user: string) => {
    setUser(user);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const valueProvider = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user]);

  return <AuthContext.Provider value={valueProvider}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
