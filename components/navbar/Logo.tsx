import Link from "next/link";
import Image from "next/image";
import React from "react";
// import { Button } from "../ui/button";

function Logo() {
  return (
    <div className="relative ">
      <Link href="/">
        <div className="relative overflow-hidden w-[100px] h-[200px] ">
          <Image
            src="/logolol1.png"
            alt="Company Logo"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
