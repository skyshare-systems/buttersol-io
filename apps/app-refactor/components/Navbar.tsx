"use client";
import React, { useState } from "react";
// import { Sora } from "next/font/google";
import { ConnectWallet } from "./ConnectWallet";

import HomeIcon from "public/icons/navbar/home-icon.svg";
import HomeStrokeIcon from "public/icons/navbar/home-stroke-icon.svg";

import TutorialIcon from "public/icons/navbar/tutorial-icon.svg";
import TutorialSolidIcon from "public/icons/navbar/tutorial-solid-icon.svg";

import AboutIcon from "public/icons/navbar/about-icon.svg";
import AboutSolidIcon from "public/icons/navbar/about-solid-icon.svg";

import ContactUsIcon from "public/icons/navbar/contact-us-icon.svg";
import ContactUsSolidIcon from "public/icons/navbar/contact-us-solid-icon.svg";

import ButterIcon from "public/icons/navbar/butter-logo.svg";
import ButterText from "public/icons/navbar/butter-text-logo.svg";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
// const sora = Sora({
//   subsets: ["latin"],
// });

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedHeader, setSelectedHeader] = useState("/");

  const navigation = [
    {
      name: "Home",
      icon: <>{selectedHeader === "/" ? <HomeIcon /> : <HomeStrokeIcon />}</>,
      linkUrl: "/",
      isLive: true,
    },
    {
      name: "Tutorial",
      icon: (
        <>
          {selectedHeader === "/#tutorial-coming-soon" ? (
            <TutorialSolidIcon />
          ) : (
            <TutorialIcon />
          )}
        </>
      ),
      linkUrl: "/#tutorial-coming-soon",
      isLive: false,
    },
    {
      name: "About",
      icon: (
        <>{selectedHeader === "/#about" ? <AboutSolidIcon /> : <AboutIcon />}</>
      ),
      linkUrl: "/#about",
      isLive: false,
    },
    {
      name: "Contact Us",
      icon: (
        <>
          {selectedHeader === "/#contact-us-coming-soon" ? (
            <ContactUsSolidIcon />
          ) : (
            <ContactUsIcon />
          )}
        </>
      ),
      linkUrl: "/#contact-us-coming-soon",
      isLive: false,
    },
  ];

  function handleRoutes(linkUrl: string) {
    setSelectedHeader(linkUrl);
    router.push(linkUrl);
  }

  return (
    <>
      <div className="fixed top-0 flex justify-center items-center py-6 sm:py-8 w-full z-[11]">
        <div className="relative flex flex-row justify-between items-center max-w-[90rem] grow px-4 xl:px-0 ">
          <h1
            className={`flex items-center font-semibold text-2xl relative z-[11]`}
          >
            <ButterIcon className="w-full max-w-[36px]" />
            <ButterText className="w-full max-w-[90px] hidden sm:block" />
          </h1>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 bg-dark-72 p-1 rounded z-[11]">
            {navigation.map((data, index) => {
              return (
                <button
                  key={index}
                  disabled={!data.isLive}
                  onClick={() => handleRoutes(data.linkUrl)}
                  className={`relative flex gap-2 z-[11] items-center description pr-3 p-2 rounded 

                  ${data.isLive ? "cursor-pointer" : "cursor-not-allowed"}
                ${
                  selectedHeader === data.linkUrl
                    ? "text-white-100 font-bold"
                    : "text-white-50"
                } border-transparent
                `}
                >
                  {selectedHeader === data.linkUrl ||
                  pathname === data.linkUrl ? (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-[10] bg-white-8 font-bold rounded mix-blend-difference"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  ) : (
                    ""
                  )}
                  {data.icon}
                  {data.name}
                </button>
              );
            })}
          </div>
          <div className="sticky z-[13]">
            <ConnectWallet />
          </div>
        </div>
      </div>

      <div className="fixed flex justify-center items-center bottom-0 w-full sm:hidden z-[999] p-3">
        <div className="flex justify-between items-center gap-2 bg-dark-72 px-6 py-1 rounded w-full max-w-[272px] border border-white-16 backdrop-blur">
          {navigation.map((data, index) => {
            return (
              <button
                key={index}
                disabled={!data.isLive}
                onClick={() => handleRoutes(data.linkUrl)}
                className={`relative flex gap-2 z-[11] items-center description pr-3 p-2 rounded 

              ${data.isLive ? "cursor-pointer" : "cursor-not-allowed"}
            ${
              selectedHeader === data.linkUrl
                ? "text-white-100 font-bold"
                : "text-white-50"
            } border-transparent
            `}
              >
                {selectedHeader === data.linkUrl ||
                pathname === data.linkUrl ? (
                  <motion.span
                    layoutId="bubble-second"
                    className="absolute inset-0 z-[10] bg-white-8 font-bold rounded mix-blend-difference"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                ) : (
                  ""
                )}
                {data.icon}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
