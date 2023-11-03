"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavProfile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setOpenProfile(!openProfile)}
      >
        <Image
          src="/assets/profile.svg"
          alt="profile_icon"
          width={24}
          height={24}
          className="object-contain"
        />

        <p className=" text-body1-bold sm:hidden">Profile Name</p>
        <Image
          src="/assets/arrow-down.svg"
          alt="burger-menu"
          width={12}
          height={12}
          className={`${openProfile ? "hidden" : "block"}`}
        />
        <Image
          src="/assets/arrow-up.svg"
          alt="burger-menu"
          width={12}
          height={12}
          className={`${!openProfile ? "hidden" : "block"}`}
        />
      </div>
      <div
        className={`${
          !openProfile ? "hidden" : "block"
        } flex flex-col gap-4 pl-7 mt-3`}
      >
        <div className="flex items-center gap-4 text-body-medium">
          <Image
            src="/assets/profile-1.svg"
            alt="Profile"
            width={20}
            height={20}
          />
          <Link href="/">Profile</Link>
        </div>
        <div className="flex items-center gap-4 text-body-medium cursor-pointer">
          <Image
            src="/assets/logout.svg"
            alt="Profile"
            width={20}
            height={20}
          />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
