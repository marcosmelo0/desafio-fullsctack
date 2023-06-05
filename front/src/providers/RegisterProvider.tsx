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
      try {
        const response = await api.post("/users/register", data);
  
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <UserContext.Provider value={{ signUp, loading }}>
        {children}
      </UserContext.Provider>
    );
  };
