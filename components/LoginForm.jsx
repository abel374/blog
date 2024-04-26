import React from "react";
import Input from "./Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <section className="container">
      <form className="border-2 border-paragraphColor rounded-lg max-w-sm mx-auto px-8 py-6 space-y-5">
        <h2 className="text-center special-word">Iniciar sessão</h2>

        <Input label="Email" type="text" name="email" />
        <Input label="Senha" type="text" name="senha" />
        <button className="btn w-full">Inscrição</button>
        <p className="text-center">
          Precisa de uma conta?{" "}
          <Link href={"/signup"} className="text-primaryColor">
            Inscrição
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
