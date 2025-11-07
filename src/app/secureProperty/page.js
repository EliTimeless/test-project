"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

export default function SecureProperty() {
  const reviews = [
    {
      id: 1,
      name: "Doubravovi",
      date: "duben 2025",
      review:
        "Zakoupil jsem si standardní balíček Matguard pro svůj byt a nemůžu si jej vynachválit...",
    },
    {
      id: 2,
      name: "Novákovi",
      date: "prosinec 2024",
      review:
        "Matalarm nám nainstaloval zabezpečovací systém v našem rodinném domě. Služby byly profesionální a rychlé...",
    },
    {
      id: 3,
      name: "Svobodovi",
      date: "leden 2025",
      review:
        "Díky Matalarm máme klidné spaní. Jejich alarmy jsou spolehlivé a snadno se ovládají přes mobilní aplikaci...",
    },
    {
      id: 4,
      name: "Kovářovi",
      date: "březen 2024",
      review:
        "S Matalarm jsme velmi spokojeni. Instalace byla rychlá a personál byl velmi ochotný a profesionální...",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const { name, review, date } = reviews[index];

  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-2 max-md:gap-20 md:flex-row pb-2 items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 bg-[#f4f8ff]">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[#1855fb] text-2xl">MatAlarm</h2>
          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl ">
            SPOLEHLIVÉ, CHYTRÉ, PRAKTICKÉ{" "}
          </h1>
          <p className="text-center text-lg md:text-left   max-w-lg mt-2">
            Lorem ipsum dolor sit amet , consec tetuer adipiscing elit .
            Curabitur bibendum justo non orci. Lorem ipsum dolor sit amet ,
            consec tetuer adipiscing elit .
          </p>
          <div className="flex items-center gap-4 mt-8 text-lg">
            <button className="bg-[#1855fb] text-white  rounded-tr-4xl rounded-bl-4xl px-3 py-4">
              Rezervovat konzultaci{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-center ">
          {" "}
          <Image
            src="/images/phone-app.png"
            alt="Mat logo"
            width={400}
            height={500}
            className="m-1"
          />{" "}
        </div>
      </div>
      <h1 className="text-5xl text-center flex justify-center mt-20 mx-auto max-w-6xl mb-4 ">
        Zajišťujeme vaši bezpečnost pomocí špičkových ochranných systémů.{" "}
      </h1>
      <p className="text-2xl text-[#1855fb] text-center mt-3 max-w-md mx-auto">
        Spolehlivá řešení pro váš klid.
      </p>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 justify-center items-center gap-3 mt-10 mb-10 pb-10">
        <div className="flex flex-col text-center ">
          <Image
            src="/images/image-1.png"
            width={500}
            height={550}
            alt="Feature 1"
            className="pb-4 object-contain"
          />
          <div className="w-full flex flex-col items-start ">
            <div className="flex items-start w-full min-h-[60px] text-2xl">
              <span className="text-[#2d2d2e] font-medium whitespace-normal">
                <span className="text-[#1855fb] mr-1">01</span>
                Standartní balíček řešení{" "}
              </span>
            </div>
            <button className="flex text-[#1855fb] text-xl bg-[#dbe4fb] rounded-2xl px-4 py-3 mt-10 ">
              zjistit více{" "}
              <span className="ml-3">
                <Image
                  src="/icons/Arrow-down-right-03.png"
                  width="15"
                  height="15"
                  color="#1855fb"
                  alt="Arrow down"
                />{" "}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/image-2.png"
            width={500}
            height={550}
            alt="Feature 2"
            className="pb-4 object-contain"
          />{" "}
          <div className="w-full flex flex-col items-start">
            <div className="flex items-start w-full min-h-[60px] text-2xl">
              <span className="text-[#2d2d2e] font-medium whitespace-normal wrap-break-word">
                {" "}
                <span className="text-[#1855fb] mr-1">02</span>
                Upgrade Chytrý zvonek s kamerou a audio výstupem{" "}
              </span>
            </div>
            <button className=" flex items-center text-[#1855fb] text-xl bg-[#dbe4fb] rounded-2xl px-4 py-3 mt-9">
              zjistit více{" "}
              <span className="ml-3">
                <Image
                  src="/icons/Arrow-down-right-03.png"
                  width="15"
                  height="15"
                  color="#1855fb"
                  alt="Arrow down"
                />{" "}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/image-3.png"
            width={500}
            height={550}
            alt="Feature 3"
            className="pb-2 object-contain"
          />
          <div className="w-full flex flex-col items-start">
            <div className="flex items-start w-full min-h-[60px] text-2xl">
              <span className="text-[#2d2d2e] font-medium whitespace-normal pb-10">
                {" "}
                <span className="text-[#1855fb] mr-1">03</span>
                Zabezpečení venkovních, kancelářských prostor a kamerové
                propojení{" "}
              </span>
            </div>
            <button className=" flex items-center  text-[#1855fb] text-xl bg-[#dbe4fb] rounded-2xl px-4 py-3 mt-1 ">
              zjistit více{" "}
              <span className="ml-3">
                <Image
                  src="/icons/Arrow-down-right-03.png"
                  width="15"
                  height="15"
                  color="#1855fb"
                  alt="Arrow down"
                />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f8ff] sm:py-32 w-full">
        <div className="mx-auto py-20 px-20">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-4">
            <div className="mx-auto flex  flex-col gap-y-4">
              <dt className=" text-[#2d2d2e] text-xl">
                tisíc KČ je <strong>průměrná finanční škoda</strong> způsobená
                jedním vloupáním do nemovitosti{" "}
              </dt>
              <dd className="order-first text-[100px] font-semibold tracking-tight text-[#1855fb] ">
                70
              </dd>
            </div>
            <div className="mx-auto flex  flex-col gap-y-4">
              <dt className=" text-[#2d2d2e] text-xl">
                <strong>spokojených zákazníků</strong> , kterí potvrdili větší
                jistotu bezpečí
              </dt>
              <dd className="order-first text-[100px] font-semibold tracking-tight text-[#1855fb] ">
                100%
              </dd>
            </div>
            <div className="mx-auto flex  flex-col gap-y-4">
              <dt className=" text-[#2d2d2e] text-xl">
                rodinných domů a bytů v ČR stále{" "}
                <strong>nemá nainstalovaný žádný bezpečnostní systém</strong>
              </dt>
              <dd className="order-first text-[100px] font-semibold tracking-tight text-[#1855fb] ">
                80%{" "}
              </dd>
            </div>
            <div className="mx-auto flex  flex-col gap-y-4">
              <dt className=" text-[#2d2d2e] text-xl">
                Nemovitostí vybavené moderním bezpečnostním systémem se na{" "}
                <strong> realitním trhu prodávají o 5-10 % dráž </strong> než
                srovnatelné nemovitosti bez něj.
              </dt>
              <dd className="order-first text-[100px] font-semibold tracking-tight text-[#1855fb] ">
                +10%{" "}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div>
        <div className="mx-auto p-20">
          <h1 className="text-center text-[50px]">
            Bezpečnost, na kterou se můžete spolehnout
          </h1>
          <p className="text-center text-2xl text-[#1855fb]">
            Váš klid je naše priorita
          </p>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <Image
                src="/icons/wifi-icon.png"
                width={500}
                height={500}
                alt="Alarm Icon"
              />
              <dt className=" text-[#1855fb] text-3xl">
                Připojení přes wifi a nebo SIM
              </dt>
              <dt className=" text-[#2d2d2e]">
                Naše alarmy podporují vysokorychlostní sítě, díky kterým
                přichází okamžitý feedback ze zařízení.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                44 million
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <Image
                src="/icons/alarm-icon.png"
                width={500}
                height={500}
                alt="Alarm Icon"
              />
              <dt className=" text-[#1855fb] text-3xl">
                Optimalizace na přání
              </dt>
              <dt className=" text-[#2d2d2e]">
                Klient je u nás na prvním místě a každá instalace je ušitá na
                míru.
              </dt>{" "}
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                $119 trillion
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <Image
                src="/icons/eu-icon.png"
                width={500}
                height={500}
                alt="Alarm Icon"
              />
              <dt className=" text-[#1855fb] text-3xl">
                Moderní přístroje certifikované EU
              </dt>
              <dt className=" text-[#2d2d2e]">
                Dbáme na kvalitu a dlouhotrvající funkčnost našich přístrojů,
                které podléhají nejvyššímu standardu směrnic EU.
              </dt>{" "}
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                46,000
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <Image
                src="/icons/android-ios-icon.png"
                width={500}
                height={500}
                alt="Alarm Icon"
              />
              <dt className=" text-[#1855fb] text-3xl">
                Smart app a chytrá UI optimalizace
              </dt>
              <dt className=" text-[#2d2d2e]">
                V naší nabídce máme širokou škálu kompatibilních přístrojů,
                které lze propojit s chytrou domácností.{" "}
              </dt>{" "}
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                46,000
              </dd>
            </div>
          </dl>
        </div>

        <div className="testimonial grid md:grid-cols-4 grid-cols-1 bg-[#f5f8ff] py-10 px-6 md:px-20 mt-20 relative">
          <div className="relative left-50 top-3 md:block hidden">
            <Image
              src="/images/testimonial-man.jpg"
              width="500"
              height="600"
              alt="Customer"
              className="rounded-md md:block hidden"
            />
          </div>
          <div className="marks-icon">
            <Image
              src="/icons/marks-icon.png"
              width="100"
              height="100"
              alt="marks"
              className="md:block hidden"
            />
          </div>

          <div className="header flex flex-col md:flex-row md:items-end md:justify-between w-full">
            <div className="flex flex-col text-left">
              <p className="text-[#1855fb] text-xl mb-4 md:mb-0">MatAlarm</p>
              <h2 className="text-4xl font-semibold text-[#2d2d2e] mb-4 md:mb-8">
                Recenze zákazníků
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              {" "}
              <button
                onClick={prevReview}
                className="rounded-full hover:bg-[#1855fb] hover:text-white bg-[#dbe4fb] text-[#1855fb] p-1 m-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="rounded-full hover:bg-[#1855fb] hover:text-white bg-[#dbe4fb] text-[#1855fb] p-1 m-1 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="review bg-white shadow-lg border-l-4 border-[#1855fb] p-6 md:p-10 text-[#1855fb] w-full md:w-[700px] mx-auto md:ml-24 mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold text-[#2d2d2e]">{name} </h3>
            <p className="text-gray-400 text-xl mb-2">{date}</p>
            <p className="text-gray-700 text-xl ">{review}</p>
          </div>
        </div>
      </div>
      <p className="text-[#1855fb] text-xl text-center mt-10">Matalarm</p>
      <h1 className="text-5xl text-center mx-auto m-2 ">
        Šití na míru podle Vašich představ{" "}
      </h1>
      <p className="text-xl text-center my-10 w-2/4 mx-auto">
        V Matalarm se již dlouhodobě specializujeme na dodávku a instalaci
        zabezpečovacích alarm systémů a GSM alarmů pro byty, rodinné domy i
        komerční objekty. Bezpečí a ochrana Vašeho majetku jsou nás na prvním
        místě, a proto se vždy snažíme najít to nejlepší řešení na míru každému
        klientovi.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center px-30 sm:px-10 mt-12 mb-12 gap-6 mx-auto">
        <div className="rounded-lg m-3">
          <Image
            src="/images/kancelare-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
        <div className="rounded-lg m-3 ">
          <Image
            src="/images/chaty-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
        <div className="rounded-lg m-3 ">
          <Image
            src="/images/komercni-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
        <div className="rounded-lg m-3 ">
          <Image
            src="/images/sklady-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
        <div className="rounded-lg m-3 ">
          <Image
            src="/images/byty-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
        <div className="rounded-lg m-3 ">
          <Image
            src="/images/venkovni-prostory-img.png"
            alt="image"
            width="550"
            height="550"
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center text-5xl m-10">
            Proč spolupracovat s firmou Matalarm?
          </h1>
          <p className="text-[#1855fb] text-xl text-center p-4 m-10">
            Ochrana bez kompromisů.
          </p>
        </div>
        <div className="relative w-full mx-10 overflow-hidden h-[1000px] mb-10">
          <div className="relative z-1 left-10 top-25 md:max-w-5xl max-w-xl bg-[#f4f8ff] py-10 pl-10 pr-30 rounded-3xl">
            <h1 className="text-3xl font-semibold mb-4 ">
              Komplexní řešení na míru
            </h1>
            <p className="text-xl mb-6">
              Firma Matalarm nabízí kompletní zabezpečovací systémy pro různé
              typy nemovitostí, od kancelářských a komerčních prostor po rodinné
              domy a chaty.
            </p>

            <h1 className="text-3xl font-semibold mb-4">
              Kvalitní a certifikované technologie
            </h1>
            <p className="text-xl mb-6">
              Produkty jako dotyková ústředna s GMS/GPRS komunikátorem,
              bezdrátové PIR detektory pohybu a voděodolné CCTV kamery jsou
              spolehlivé...
            </p>

            <h1 className="text-3xl font-semibold mb-4">
              Široká škála produktů a upgrady
            </h1>
            <p className="text-xl mb-6">
              Vedle základního balíčku MatGuard firma nabízí rozšíření o chytré
              technologie...
            </p>

            <h1 className="text-3xl font-semibold mb-4">
              Ekonomická výhodnost
            </h1>
            <p className="text-xl mb-6">
              Cenová politika firmy Matalarm je koncipována tak, aby byla
              dostupná široké klientele.
            </p>
          </div>
          <div className="absolute z-0 right-50 top-0 md:block hidden">
            <Image
              src="/images/family-img.jpg"
              alt="image 1"
              width="800"
              height="1000"
              className="rounded-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
