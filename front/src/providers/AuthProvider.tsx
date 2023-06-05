import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import toast from "react-hot-toast";


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
      toast.success("Logado com sucesso!", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("E-mail ou senha incorretos!", {
        duration: 5000,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
