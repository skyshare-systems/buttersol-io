"use client";
import React, { useState } from "react";
import { Sora } from "next/font/google";
import { ConnectWallet } from "./ConnectWallet";
import HomeIcon from "public/icons/navbar/home-icon.svg";
import TutorialIcon from "public/icons/navbar/tutorial-icon.svg";
import AboutIcon from "public/icons/navbar/about-icon.svg";
import ContactUsIcon from "public/icons/navbar/contact-us-icon.svg";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const sora = Sora({
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [selectedHeader, setSelectedHeader] = useState("/");

  const navigation = [
    {
      name: "Home",
      icon: (
        <HomeIcon
          className={`${selectedHeader === "/" ? "opacity-100" : "opacity-50"}`}
        />
      ),
      linkUrl: "/",
    },
    {
      name: "Tutorial",
      icon: (
        <TutorialIcon
          className={`${
            selectedHeader === "/#tutorial" ? "opacity-100" : "opacity-50"
          }`}
        />
      ),
      linkUrl: "/#tutorial",
    },
    {
      name: "About",
      icon: (
        <AboutIcon
          className={`${
            selectedHeader === "/#about" ? "opacity-100" : "opacity-50"
          }`}
        />
      ),
      linkUrl: "/#about",
    },
    {
      name: "Contact Us",
      icon: (
        <ContactUsIcon
          className={`${
            selectedHeader === "/#contact-us" ? "opacity-100" : "opacity-50"
          }`}
        />
      ),
      linkUrl: "/#contact-us",
    },
  ];

  return (
    <>
      <div className="sticky top-0 flex justify-center items-center py-8 z-[12]">
        <div className="flex flex-row justify-between items-center max-w-[90rem] grow px-4 xl:px-0">
          <h1
            className={`${sora.className} flex items-center font-semibold text-2xl`}
          >
            <span className="text-primary-100">B</span>
            <span className="hidden sm:block text-primary-100">utter</span>
            <span className="text-white-100">S</span>
            <span className="hidden sm:block text-white-100">OL</span>
          </h1>

          <div className="hidden lg:flex items-center gap-2 bg-dark-72 p-1 rounded ">
            {navigation.map((data, index) => {
              return (
                <a
                  key={index}
                  href={data.linkUrl}
                  onClick={() => setSelectedHeader(data.linkUrl)}
                  className={`relative flex gap-2 z-[11] items-center description pr-3 p-2 rounded 
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
                </a>
              );
            })}
          </div>
          <ConnectWallet />
        </div>
      </div>
    </>
  );
};

export default Navbar;
