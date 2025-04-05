"use client";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";

function CallButton() {
  const phoneNumber = "+916369857591";
  const callLink = `tel:${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      const callLinkElement = document.querySelector(".call-link");
      if (window.scrollY > 100) {
        callLinkElement?.classList.add("visible");
      } else {
        callLinkElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const callLinkElement = document.querySelector(".call-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        callLinkElement?.classList.add("visible");
      }
    };

    checkScrollVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        href={callLink}
        className="call-link relative"
        rel="noreferrer noopener"
      >
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full bg-blue-500 opacity-75"></span>
        </span>
        <Image
          src="/phonepng.png"
          alt="call"
          width={40}
          height={40}
          className="call-icon z-50 rounded-full"
        />
      </a>
    </div>
  );
}

export default CallButton;
