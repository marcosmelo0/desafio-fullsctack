import logo from "../../assets/img/logo.png";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/userRegister";

export const Register = () => {
  const { signUp } = useRegister();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <main className="flex justify-center items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 h-screen">
          <div className="flex items-center justify-center w-[90%] md:w-[80%] max-w-lg mt-5 md:m-auto flex-col bg-white rounded-[10px]">
            <div className="flex flex-col pb-5 justify-center items-center">
              <img className="w-16" src={logo} alt="logotipo" />
              <h1 className="text-slate-700 font-semibold text-[18px]">
                | Contact Flow - Register |
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(signUp)}
              className="w-[90%] border-gray-300 rounded-[10px] p-3 border-2 mb-5 flex flex-col gap-2"
            >
              <label htmlFor="name">Nome completo:</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
                {...register("name")}
              />
              {errors && (
                <span className="text-red-600 text-[17px]">
                  {errors.name?.message}
                </span>
              )}
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
                {...register("email")}
              />
              {errors && (
                <span className="text-red-600 text-[17px]">
                  {errors.email?.message}
                </span>
              )}
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
                {...register("password")}
              />
              {errors && (
                <span className="text-red-600 text-[17px]">
                  {errors.password?.message}
                </span>
              )}
              <label htmlFor="confirm-password">Confirme a senha:</label>
              <input
                type="password"
                placeholder="Confirmar senha"
                id="confirmPassword"
                className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
                {...register("confirmPassword")}
              />
              {errors && (
                <span className="text-red-600 text-[17px]">
                  {errors.confirmPassword?.message}
                </span>
              )}
              <label htmlFor="telephone">Telefone:</label>
              <input
                placeholder="Digite seu número"
                id="telephone"
                className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
                {...register("telephone")}
              />
              {errors && (
                <span className="text-red-600 text-[17px]">
                  {errors.telephone?.message}
                </span>
              )}
              <button
                type="submit"
                className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white"
              >
                Cadastrar
              </button>
              <span className="m-auto">Já tem conta?</span>
              <button
                onClick={handleLogin}
                className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white"
              >
                Entrar
              </button>
            </form>
          </div>
      </main>
    </>
  );
};
