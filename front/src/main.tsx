import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "/src/styles/main.css";
import { RegisterProvider } from "./providers/RegisterProvider.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { ContactProvider } from "./providers/ContactProvider.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <AuthProvider>
          <ContactProvider>
            <Toaster position="top-center" reverseOrder={false} />

            <App />
          </ContactProvider>
        </AuthProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
