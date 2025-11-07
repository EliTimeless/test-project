import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#101c3f] text-white mt-20">
      <div className="px-2 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center lg:items-start justify-between gap-10 py-10 border-b border-white">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 mb-10 pb-10 w-full">
          <Link href="/secure" className="flex items-center">
            <Image
              src="/images/Mat-blue.png"
              alt="Mat logo"
              width="60"
              height="60"
            />
          </Link>
          <div className="text-center md:text-left">
            <h1 className="text-xl">MatAlarm</h1>
            <p className="text-md w-45">Chytré zabezpečovací systémy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 w-full items-center lg:grid-cols-4 lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <h3 className="font-semibold text-xl mb-2 text-center lg:text-left">
              MatAlarm
            </h3>
            <p>+420 604 134 933</p>
            <p>instalace@matalarm.cz</p>
            <div className="flex items-center gap-3 mt-2">
              <Link href="https://www.facebook.com" target="_blank">
                <Image
                  src="/icons/facebook-white.png"
                  width={32}
                  height={32}
                  alt="Facebook"
                  className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <Image
                  src="/icons/instagram-white.png"
                  width={32}
                  height={32}
                  alt="Instagram"
                  className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8"
                />
              </Link>
              <Link href="https://www.linkedin.com/feed/" target="_blank">
                <Image
                  src="/icons/linkedin-white.png"
                  width={32}
                  height={32}
                  alt="LinkedIn"
                  className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-semibold text-xl mb-2 text-center lg:text-left">
              Na Příkopě 14
            </h3>
            <p>110 00 Praha 1</p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <h3 className="font-semibold text-xl mb-2 text-center lg:text-left">
              Odkazy
            </h3>
            <Link href="/secureProperty">Zabezpečení nemovitosti</Link>
            <Link href="/aboutPage">O nás</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/math">Výpočet ceny zdarma</Link>
            <Link href="/contact">Kontakt</Link>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <button className="w-full sm:w-auto py-2 px-4 rounded-xl bg-[#dbe4fb] text-[#1855fb] hover:bg-[#cbd8fa] ">
              Rezervovat konzultaci
            </button>
          </div>
        </div>
      </div>

      <p className="py-4 px-2 md:px-16 lg:px-24 xl:px-32 text-center md:text-left text-sm md:text-base">
        Cookies | GDPR | © 2025 Matalarm.cz
      </p>
    </footer>
  );
}
