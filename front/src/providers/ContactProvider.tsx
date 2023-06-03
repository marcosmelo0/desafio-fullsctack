import {  ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ContactData } from "../components/forms/contact/validator";

interface ContactProviderProps {
    children: ReactNode;
  }

interface ContactContextValues {
  contactCreate: (data: ContactData) => void;
  contacts: ContactData[]
}

export const ContactContext = createContext<ContactContextValues>(
  {} as ContactContextValues
);

export const ContactProvider = ({ children }: ContactProviderProps) => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState<ContactData[]>([]);

    const token = localStorage.getItem("@TOKEN");
    useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await api.get<ContactData[]>("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContacts(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [token]);

    const contactCreate = async (data: ContactData) =>  {
      try {
        const response = await api.post("/contacts", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      
        setTimeout(() => {
          window.location.reload()
        }, 1000);
         
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <ContactContext.Provider value={{ contactCreate, contacts }}>
        {children}
      </ContactContext.Provider>
    );
  };
