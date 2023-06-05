import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  user: null;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)


  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      setUser(response.data.user)
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
