"use client";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";

function WhatsappLive() {
  const whatsappNumber = "+91 98946 92692";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodedMessage = `Hello, I want details regarding rental cars.`;
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        whatsappLinkElement?.classList.add("visible");
      }
    };
    checkScrollVisibility();

    // window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        href={whatsappLink}
        className="whatsapp-link relative"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image
          src="/whatsapplogo.png"
          alt="whatsapp"
          width={40}
          height={40}
          className="whatsapp-icon z-50"
        />
      </a>
    </div>
  );
}

export default WhatsappLive;
