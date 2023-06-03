import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { RegisterData } from "../../../pages/register/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../../pages/login/validator";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <form
      onSubmit={handleSubmit(signIn)}
      className="border-gray-300 rounded-[10px] mt-5 p-3 pb-5 border-2 flex flex-col gap-2"
    >
      <label htmlFor="email" className="text-slate-700 ">
        E-mail:
      </label>
      <input
        type="email"
        id="email"
        placeholder="Digite seu e-mail"
        className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
        {...register("email")}
      />
      <label htmlFor="password" className="text-slate-700 ">
        Senha:
      </label>
      <input
        type="password"
        id="password"
        placeholder="Digite sua senha"
        className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
        {...register("password")}
      />
      <button
        type="submit"
        className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white"
      >
        Entrar
      </button>
      <span className="text-center">Não tem conta?</span>
      <button
        type="button"
        onClick={handleRegister}
        className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};
