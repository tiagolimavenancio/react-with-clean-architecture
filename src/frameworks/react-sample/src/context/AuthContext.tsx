import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import di from "di";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { ISessionStateGroup } from "redux/interfaces/ISession";

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
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: ISessionStateGroup) => state.session.token);

  console.log("AuthProvider: ", token);

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken();

      if (storageToken) {
        const typeAction = di.session.setToken(storageToken);
        dispatch(typeAction);
      }
    })();
  }, [token]);

  const login = useCallback(
    async (id: string, pw: string) => {
      const responseToken = await di.session.login(id, pw);
      dispatch(di.session.setToken(responseToken));
      navigate("/", { replace: true });
    },
    [dispatch, navigate]
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
