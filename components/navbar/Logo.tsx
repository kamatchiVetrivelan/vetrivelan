import Link from "next/link";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center p-0 m-0">
      <div className="relative w-[200px] h-[80px]">
        <Image
          src="/logolol1.png"
          alt="Company Logo"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
          priority
          className="!p-0 !m-0"
        />
      </div>
    </Link>
  );
}

export default Logo;
