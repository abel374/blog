import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container py-2 h-16 flex items-center justify-between">
      <Link href="/">
        <h2 className="text-center">
          {" "}
          Systan<span className="special-word">Notícias.</span>
        </h2>
      </Link>
      <ul className=" flex items-center gap-3">
        <li className="">
          <Link href="/blog"> Blogue</Link>
        </li>
        <li className="">
          <Link href="/create-blog"> Criar</Link>
        </li>
        <li className="">
          <Link href="/user"> Perfil</Link>
        </li>
        <li className="">
          <Link href="/login"> Conecte-se</Link>
        </li>
        <li className="">
          <Link href="/signup"> Inscrever-se</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
