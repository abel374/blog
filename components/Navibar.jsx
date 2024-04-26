"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import abel from "@/public/img/abel.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const loggedin = true;
  const pathname = usePathname();
  const [showDropdown, setshowDropdown] = useState(false);
  const handleShowDropdown = () => setshowDropdown((prev) => true);
  const handleHideDropdown = () => setshowDropdown((prev) => false);

  return (
    <div className="container py-2 h-16 flex items-center justify-between">
      <Link href="/">
        <h2>
          Systan<span className="special-word">Notícias.</span>
        </h2>
      </Link>
      <ul className=" flex items-center gap-3">
        <li className="">
          <Link href="/blog" className={ pathname === '/blog' ? "text-primaryColor font-bold" : ""}> Blogue</Link>
        </li>
        {loggedin ? (
          <>
            <li>
              <Link href="/create-blog" 
              className={ pathname === '/create-blog' ? "text-primaryColor font-bold" : ""}
              > Criar</Link>
            </li>
            <li>
              <div classeName="relative">
                <Image
                  onClick={handleShowDropdown}
                  src={abel}
                  alt="avatar"
                  sizes="100vw"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                {showDropdown && (
                  <div className="absolute top-0 right-0 bg-primaryColorLight p-5">
                    <AiOutlineClose
                      onClick={handleHideDropdown}
                      className="w-full cursor-pointer"
                    />
                    <button onClick={handleHideDropdown}> Sair</button>
                    <Link onClick={handleHideDropdown} href="/user">
                      Perfil
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="">
              <Link href="/login" className={ pathname === '/login' ? "text-primaryColor font-bold" : ""}> Conecte-se</Link>
            </li>
            <li className="">
              <Link href="/signup" className={ pathname === '/signup' ? "text-primaryColor font-bold" : ""}> Inscrever-se</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
