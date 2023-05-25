import {  ReactNode, createContext, useState } from "react";
import { RegisterData } from "../pages/register/validator";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface UserProviderProps {
    children: ReactNode;
  }

interface UserContextValues {
  signUp: (data: RegisterData) => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const RegisterProvider = ({ children }: UserProviderProps) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

  
    const signUp = async (data: RegisterData) => {
      console.log(data)
      try {
        const response = await api.post("/register", data);
  
      } catch (error) {
        console.error(error);
      }
      setLoading(false)
    };
  
    return (
      <UserContext.Provider value={{ signUp, loading }}>
        {children}
      </UserContext.Provider>
    );
  };
