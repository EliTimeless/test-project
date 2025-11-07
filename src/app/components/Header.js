"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/secureProperty", label: "Zabezpečení nemovitosti" },
    { href: "/aboutPage", label: "O nás" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/math", label: "Výpočet ceny zdarma" },
  ];
  return (
    <div className="bg-[#f4f8ff]">
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 ">
        <div className="hidden  md:flex items-center gap-3 transition duration-500 sm:flex">
          <Link href="/secure" className="flex items-center gap-2">
            {" "}
            <Image
              src="/images/Mat-white.png"
              alt="Mat logo"
              width="40"
              height="40"
            />{" "}
          </Link>
          <span>
            <h1 className="text-xl">MatAlarm</h1>
            <p className="text-sm text-wrap w-40">
              Chytré zabezpečovací systémy
            </p>
          </span>
        </div>
        <div className="hidden md:flex items-center xl:gap-6 md:gap-6 transition duration-500 ">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-colors duration-300 gap-8
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300
                ${
                  pathname === href
                    ? "after:w-1/2 "
                    : "after:w-0 hover:after:w-1/2"
                }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className=" bg-[#dbe4fb] px-2 py-2 rounded-xl text-[#1855fb]"
          >
            Kontakt
          </Link>
        </div>{" "}
        <div className="hidden md:flex items-center gap-2">
          <Link href="https://www.facebook.com" target="_blank">
            <Image
              src="/icons/facebook-circular-logo.png"
              width="25"
              height="25"
              alt="Facebook"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <Image
              src="/icons/insta-icon.png"
              width="25"
              height="25"
              alt="Instagram"
            />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <Image
              src="/icons/linkedin-icon.png"
              width="25"
              height="25"
              alt="LinkedIn"
            />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          <Image
            src={!isOpen ? "/icons/menu.png" : null}
            width={30}
            height={30}
            alt="Menu"
          />
        </button>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#f4f8ff] text-lg border-t border-[#dbe4fb] animate-fade-in-down">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)} // zavře menu po kliknutí
                className={`transition duration-300 ${
                  pathname === href ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#dbe4fb] px-4 py-2 rounded-xl text-[#1855fb]"
            >
              Kontakt
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
