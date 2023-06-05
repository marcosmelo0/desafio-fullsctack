import logo from "../../assets/img/logo.png";
import { FormLogin } from "../../components/forms/login";

export const Login = () => {
  return (
    <main
      className={`text-slate-700 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 h-screen`}
    >
      <div className="flex justify-center items-center pt-[15vh]">
        <div className="flex items-center justify-center w-[90%] md:w-[80%] max-w-lg md:m-auto h-auto pb-10 pt-5 flex-col bg-white rounded-[10px]">
          <img className="w-16" src={logo} alt="logo contact flow" />
          <h1 className="text-[17px] font-semibold">
            | Contact Flow - Login |
          </h1>
          <div className="w-[90%]">
            <FormLogin />
          </div>
        </div>
      </div>
    </main>
  );
};
