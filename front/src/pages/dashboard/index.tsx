import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FormContact, NoContact } from "../../components/forms/contact";
import { useState, useContext } from "react";
import { ContactContext } from "../../providers/ContactProvider";
import { Contacts } from "../../components/cards/contact";
import { ToastContainer } from "react-toastify";

export const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const { contacts } = useContext(ContactContext);

  const navigate = useNavigate();

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <>
      <header className="flex items-center text-blue-950 shadow-md shadow-blue-900 h-[10vh]">
        <div className="flex items-center">
          <img className="w-16" src={logo} alt="logo contact flow" />
          <span className="font-medium text-lg">Contact Flow</span>
        </div>
      </header>
      <main className="text-blue-950 ">
        <div className="flex items-center justify-between bg cursor-pointer w-[90%] mt-[5vh] ml-[5%]">
          <h2 className="text-lg font-medium">Contatos:</h2>
          <button
            type="button"
            onClick={toggleLoading}
            className="border-2 rounded-[999px] p-1 pl-2 pr-2 bg-blue-700 hover:bg-blue-800 text-white"
          >
            Adicionar contato
          </button>
        </div>
        {!loading ? (
          contacts.length == 0 ? (
            <NoContact />
          ) : (
            <>
              <ul>
                {contacts.map((contact) => (
                  <Contacts key={contact.id} contact={contact} />
                ))}
              </ul>
            </>
          )
        ) : (
          <>
            <div className="flex w-[88.5vw] ml-5 justify-end items-center text-center pt-5">
              <span
                onClick={toggleLoading}
                className="font-black absolute bottom-[74vh] cursor-pointer w-10 h-10 pt-1 rounded-[999px] bg-blue-700 hover:bg-blue-800 text-red-500 text-xl ml-[78vw]"
              >
                X
              </span>
            </div>
            <FormContact
              toggleLoading={toggleLoading}
              loading={loading}
              setLoading={setLoading}
            />
          </>
        )}
         <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
      </main>
    </>
  );
};
