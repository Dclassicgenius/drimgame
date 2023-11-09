"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menuItems } from "@/constants";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

type MobileMenuprops = {
  imageUrl: string;
  username: string;
};

const MobileMenu = ({ imageUrl, username }: MobileMenuprops) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openStates, setOpenStates] = useState(menuItems.map(() => false));
  const [openProfile, setOpenProfile] = useState(false);

  const { signOut } = useClerk();
  const router = useRouter();

  const toggleOpenState = (index: number) => {
    setOpenStates(openStates.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <>
      <div className="sm:hidden flex items-center justify-between">
        <Link href={"/"} className="sm:hidden">
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
        </div>
      </div>

      <SignedOut>
        <SignInButton>
          <button className="sm:hidden mt-5 text-body1-bold hover:bg-dark-1 hover:rounded px-3 py-2">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="sm:hidden flex flex-col w-fit mt-5">
          <div
            className="flex items-center gap-3 cursor-pointer hover:bg-dark-1 hover:rounded px-3 py-2"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <Image
              src={imageUrl ?? "/assets/profile-icon.svg"}
              alt="profile_icon"
              width={24}
              height={24}
              className="object-contain rounded-full"
            />
            <p className=" text-body1-bold ">{username}</p>
            <Image
              src="/assets/arrow-down.svg"
              alt="arrow down"
              width={12}
              height={12}
              className={`${openProfile ? "hidden" : "block"}`}
            />
            <Image
              src="/assets/arrow-up.svg"
              alt="arrow up"
              width={12}
              height={12}
              className={`${!openProfile ? "hidden" : "block"}`}
            />
          </div>
          <div
            className={`${
              !openProfile ? "hidden" : "block"
            } flex flex-col pl-7 `}
          >
            <Link
              className="flex items-center gap-4 text-body-medium hover:bg-dark-1 hover:rounded px-3 py-2"
              href={"/"}
            >
              <Image
                src="/assets/profile-1.svg"
                alt="profile"
                width={20}
                height={20}
              />
              <p>Profile</p>
            </Link>
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="flex items-center gap-4 text-body-medium hover:bg-dark-1 hover:rounded px-3 py-2 cursor-pointer"
            >
              <Image
                src="/assets/logout.svg"
                alt="Logout"
                width={20}
                height={20}
              />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </SignedIn>
      <div
        className={`text-light-2 mt-5 w-[300px] ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-start ">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <div
                className="flex items-center gap-4 cursor-pointer hover:bg-dark-1 hover:rounded px-3 py-2"
                onClick={() => toggleOpenState(index)}
              >
                <Image
                  src={menuItem.icon}
                  alt={menuItem.name}
                  width={24}
                  height={20}
                />
                <p className="text-body1-bold uppercase">{menuItem.name}</p>
                <Image
                  src="/assets/arrow-down.svg"
                  alt="arrow down"
                  width={12}
                  height={12}
                  className={`${
                    openStates[index] ? "hidden" : "block"
                  } cursor-pointer`}
                />
                <Image
                  src="/assets/arrow-up.svg"
                  alt="arrow up"
                  width={12}
                  height={12}
                  className={`${
                    !openStates[index] ? "hidden" : "block"
                  } cursor-pointer`}
                />
              </div>
              <ul
                className={`${
                  !openStates[index] ? "hidden" : "block"
                } pl-10 text-body-medium space-y-4 mb-4`}
              >
                {menuItem.items.map((item, i) => (
                  <Link
                    href={item.link}
                    key={i}
                    className="flex items-center gap-3 hover:bg-dark-1 hover:rounded px-3 py-2"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                    <p>{item.name}</p>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
