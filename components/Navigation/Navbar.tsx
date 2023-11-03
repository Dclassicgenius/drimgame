"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import NavProfile from "./NavProfile";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className=" py-7 px-14 bg-dark-2 transition-all text-light-1">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/assets/logo.png"} alt="logo" width={100} height={100} />
        </Link>

        <div>
          <Image
            src="/assets/burger-menu.svg"
            alt="burger-menu"
            width={36}
            height={36}
            className={`${
              openMenu ? "hidden" : "block"
            } cursor-pointer sm:hidden`}
            onClick={() => setOpenMenu(!openMenu)}
          />
          <Image
            src="/assets/close.svg"
            alt="burger-menu"
            width={36}
            height={36}
            className={`${
              !openMenu ? "hidden" : "block"
            } cursor-pointer sm:hidden`}
            onClick={() => setOpenMenu(!openMenu)}
          />
          <NavProfile />
        </div>
      </div>
      <div className="sm:hidden mt-6">
        <NavProfile />
        <MobileMenu openMenu={openMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
