import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <main
      className={`text-slate-700 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 h-screen`}
    >
      <div className="w-[90%] mt-[25vh] ml-[5%] flex h-auto pb-10 pt-5 flex-col bg-white rounded-[10px] absolute items-center justify-center">
        <img className="w-16" src={logo} alt="logo contact flow" />
        <h1 className="text-[17px] font-semibold">| Contact Flow - Login |</h1>
        <div className="w-[90%]">
          <form
            action="submit"
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
            />
            <label htmlFor="password" className="text-slate-700 ">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
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
        </div>
      </div>
    </main>
  );
};
