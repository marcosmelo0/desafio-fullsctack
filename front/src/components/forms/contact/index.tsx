import { useForm } from "react-hook-form";
import { useContact } from "../../../hooks/contactAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, contactSchema } from "./validator";


export const FormContact = (loading: any, setloading: any) => {
  const { contactCreate } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });
  
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(contactCreate)} className="flex justify-center flex-col gap-2 w-[85vw] border-gray-300 rounded-[10px] mt-5 p-3 pb-5 border-2">
        <label htmlFor="name">Nome completo:</label>
        <input
          id="name"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.name?.message && "focus:outline-red-600"}`}
          placeholder="Nome do contato"
          { ...register("name")}
          />
        {errors && <span className="text-red-600">{errors.name?.message}</span>}
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.email?.message && "focus:outline-red-600"}`}
          placeholder="E-mail do contato"
          { ...register("email")}
          />
          {errors && <span className="text-red-600">{errors.email?.message}</span>}
        <label htmlFor="telephone">Telefone:</label>
        <input
          id="telephone"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.telephone?.message && "focus:outline-red-600 border-gray-200"}`}
          placeholder="Telefone do contato"
          { ...register("telephone")}
          />
          {errors && <span className="text-red-600">{errors.telephone?.message}</span>}
        <p className="text-center mt-5">
          Este contato está um passo de torna-se seguro ;)
        </p>
        <button type="submit" className="h-10 mt-5 border-2 rounded-[999px] p-1 pl-2 pr-2 bg-blue-700 hover:bg-blue-800 text-white">
          Salvar contato
        </button>
      </form>
    </div>
  );
};

export const NoContact = () => {
  return (
    <div className="flex justify-center mt-[5vh] font-semibold text-center">
      <span>
        Você não possui contatos salvos :(
        <br></br>
        Adicione um novo contato!
      </span>
    </div>
  );
};

export const ContactEdit = (contact: ContactData) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  return(
    <div className="flex justify-center">
      <form className="flex justify-center flex-col gap-2 w-[85vw] border-gray-300 rounded-[10px] mt-5 p-3 pb-5 border-2">
        <label htmlFor="name">Nome completo:</label>
        <input
          id="name"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.name?.message && "focus:outline-red-600"}`}
          placeholder="Nome do contato"
          { ...register("name")}
          value={contact.name}
          />
        {errors && <span className="text-red-600">{errors.name?.message}</span>}
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.email?.message && "focus:outline-red-600"}`}
          placeholder="E-mail do contato"
          { ...register("email")}
          value={contact.email}
          />
          {errors && <span className="text-red-600">{errors.email?.message}</span>}
        <label htmlFor="telephone">Telefone:</label>
        <input
          id="telephone"
          className={`border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000 ${errors.telephone?.message && "focus:outline-red-600 border-gray-200"}`}
          placeholder="Telefone do contato"
          { ...register("telephone")}
          value={contact.telephone}
          />
          {errors && <span className="text-red-600">{errors.telephone?.message}</span>}
        <p className="text-center mt-5">
          Este contato está um passo de torna-se seguro ;)
        </p>
        <button type="submit" className="h-10 mt-5 border-2 rounded-[999px] p-1 pl-2 pr-2 bg-blue-700 hover:bg-blue-800 text-white">
          Salvar contato
        </button>
      </form>
    </div>
  )
}
