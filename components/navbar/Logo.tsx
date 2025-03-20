import Link from "next/link";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href="/">
        <div>
          
          <Image src="/uzhavanlogo1.jpg" alt="" width={120} height={90} />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
