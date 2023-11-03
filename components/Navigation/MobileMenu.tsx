"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MobileMenuProps = {
  openMenu: boolean;
};

const MobileMenu = ({ openMenu }: MobileMenuProps) => {
  const [openGames, setOpenGames] = useState(false);
  const [openDatabase, setOpenDatabase] = useState(false);
  return (
    <nav className={`text-light-2 mt-10  ${openMenu ? "block" : "hidden"}`}>
      <ul className="flex flex-col justify-start ">
        <li>
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer mb-3"
              onClick={() => setOpenGames(!openGames)}
            >
              <Image
                src="/assets/gamepad.svg"
                alt="gamepad"
                width={24}
                height={20}
              />
              <p className="text-body1-bold uppercase">Games</p>
              <Image
                src="/assets/arrow-down.svg"
                alt="arrow down"
                width={12}
                height={12}
                className={`${openGames ? "hidden" : "block"} cursor-pointer`}
              />
              <Image
                src="/assets/arrow-up.svg"
                alt="arrow up"
                width={12}
                height={12}
                className={`${!openGames ? "hidden" : "block"} cursor-pointer`}
              />
            </div>
            <ul
              className={`${
                !openGames ? "hidden" : "block"
              } pl-9 text-body-medium space-y-4 mb-4`}
            >
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/binocular.svg"
                  alt="Binoculars"
                  width={24}
                  height={24}
                />
                <p>Discover</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/search-plus.svg"
                  alt="Search"
                  width={24}
                  height={24}
                />
                <p>Advanced search</p>
              </Link>

              <Link href={"/"} className="flex items-center gap-3 ">
                <Image
                  src="/assets/hour-glass.svg"
                  alt="Hour"
                  width={24}
                  height={24}
                />
                <p>Coming soon</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/recent.svg"
                  alt="Recent"
                  width={24}
                  height={24}
                />
                <p>Recently released</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/chart.svg"
                  alt="Chart"
                  width={24}
                  height={24}
                />
                <p>Top 100</p>
              </Link>
            </ul>
          </div>
        </li>
        <li className="mt-3">
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setOpenDatabase(!openDatabase)}
            >
              <Image
                src="/assets/database.svg"
                alt="database"
                width={24}
                height={20}
              />
              <p className="text-body1-bold uppercase ">Database</p>
              <Image
                src="/assets/arrow-down.svg"
                alt="arrow down"
                width={12}
                height={12}
                className={`${
                  openDatabase ? "hidden" : "block"
                } cursor-pointer`}
              />
              <Image
                src="/assets/arrow-up.svg"
                alt="arrow up"
                width={12}
                height={12}
                className={`${
                  !openDatabase ? "hidden" : "block"
                } cursor-pointer `}
              />
            </div>
            <ul
              className={`${
                !openDatabase ? "hidden" : "block"
              } pl-9 text-body-medium space-y-4 mt-4`}
            >
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/gamepad.svg"
                  alt="Gamepad"
                  width={24}
                  height={24}
                />
                <p>Games</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/tv.svg"
                  alt="Tv icon"
                  width={24}
                  height={24}
                />
                <p>Platforms</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src="/assets/event.svg"
                  alt="Event"
                  width={24}
                  height={24}
                />
                <p>Events</p>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
