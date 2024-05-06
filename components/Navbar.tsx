import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-6 md:p-10 flex items-center justify-between z-50">
      <div>
        <Link className="cursor-pointer" href="/">
          <Image
            src="/logo/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
