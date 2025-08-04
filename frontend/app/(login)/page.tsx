import Image from "next/image";
import logo from "@/assets/images/logosistemas3-339x96 1.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="flex">
        <form action="" className="bg-[#f8f8f8] p-24 rounded-l-4xl">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="" className="mb-3"></Image>
            <p className="text-sm text-[#636364] mb-10">
              Bem-vindo de volta! Insira seus dados.
            </p>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="text"
              placeholder="Digite seu email"
              className="border-1 border-black/25 w-full rounded-xl h-10 px-2 bg-white text-sm outline-0 focus:border-[#007AFF] duration-300"
            />
          </div>

          <div className="mb-7">
            <label htmlFor="email" className="text-sm">
              Senha
            </label>
            <input
              type="text"
              placeholder="Digite sua senha"
              className="border-1 border-black/25 w-full rounded-xl h-10 px-2 bg-white text-sm outline-0 focus:border-[#007AFF] duration-300"
            />
          </div>

          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full text-center font-bold text-white bg-[#007AFF] p-2 rounded-xl cursor-pointer hover:opacity-90 duration-300 shadow-xl mb-20"
            >
              Entrar
            </button>
          </Link>

          <p className="text-[0.625rem] text-center">
            Não tem uma conta?{" "}
            <a className="text-[#007AFF] cursor-pointer">
              Cadastre-se gratuitamente!
            </a>
          </p>
        </form>
        <div className="bg-[#007AFF] h-[620px] w-24 rounded-r-4xl"></div>
      </div>
    </div>
  );
}
