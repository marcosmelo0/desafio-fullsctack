import logo from "../../assets/img/logo.png";
import { IMaskInput } from "react-imask";

export const Register = () => {
  return (
    <>
      <main className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 h-screen">
        <div className="w-[90%] ml-[5%] mt-[25vh] rounded-[10px] bg-white h-auto absolute">
          <div className="flex flex-col pb-5 pt-5 justify-center items-center">
            <img className="w-16" src={logo} alt="logotipo" />
            <h1 className="text-slate-700 font-semibold text-[18px]">| Contact Flow - Register |</h1>
          </div>
          <form className="w-[90%] ml-[5%] border-gray-300 rounded-[10px] mt-5 p-3 mb-5 border-2 flex flex-col gap-2">
            <label htmlFor="name">Nome completo:</label>
            <input
              type="text"
              id="name"
              placeholder="Digitar seu nome"
              className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
            />
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Digitar seu e-mail"
              className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"
            />
            <label htmlFor="telephone">Telefone:</label>
            <IMaskInput mask="(00) 0 0000-0000" placeholder="Digite seu número" className="border-2 placeholder-gray-400 pl-2 h-10 w-full rounded-[5px] focus:outline-blue-600 transition-all duration-1000"/>
            <button className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white">Cadastrar</button>
            <span className="m-auto">Já tem conta?</span>
            <button className="border-2 rounded-full h-10 mt-2 bg-blue-700 hover:bg-blue-800 text-white">Entrar</button>
          </form>
        </div>
      </main>
    </>
  );
};
