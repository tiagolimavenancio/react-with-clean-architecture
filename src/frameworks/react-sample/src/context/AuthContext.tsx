import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenState } from "hooks/useSessionRecoil";
import di from "di";

type Props = {
  children?: ReactNode;
};

type AuthContextProps = {
  token: string;
  login: (id: string, pw: string) => void;
  logout: () => void;
};

const initialState = {
  token: "",
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initialState);

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useTokenState();

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken();
      if (storageToken) {
        di.session.setToken(storageToken);
        setToken(storageToken);
      }
    })();
  }, [setToken]);

  const login = useCallback(
    async (id: string, pw: string) => {
      const token = await di.session.login(id, pw);
      di.session.setToken(token);
      setToken(token);
      navigate("/", { replace: true });
    },
    [navigate, setToken]
  );

  const logout = useCallback(() => {
    di.session.removeToken();
    navigate("/login", { replace: true });
  }, [navigate]);

  const valueProvider = useMemo(() => {
    return {
      token,
      login,
      logout,
    };
  }, [login, logout, token]);

  return <AuthContext.Provider value={valueProvider}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
