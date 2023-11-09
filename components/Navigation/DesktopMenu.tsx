import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignedOut,
  currentUser,
  SignOutButton,
} from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

const DesktopMenu = async () => {
  const user = await currentUser();

  const userData = user ? await fetchUser(user?.id) : null;

  return (
    <div className="hidden sm:flex sm:items-center sm:justify-between">
      <Link href={"/"} className="hidden sm:block">
        <Image src={"/assets/logo.png"} alt="logo" width={100} height={100} />
      </Link>

      <div className="flex gap-14 items-center">
        <Menubar className="text-body1-bold px-3 py-2 border-none bg-dark-2">
          {menuItems.map((menuItem, index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className="flex items-center gap-3">
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
                />
              </MenubarTrigger>
              <MenubarContent>
                {menuItem.items.map((item, i) => (
                  <MenubarItem key={i} className="text-body-medium p-2">
                    <Link href={item.link} className="flex items-center gap-3 ">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                      />
                      <p>{item.name}</p>
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>

        <SignedOut>
          <SignInButton>
            <button className="sm:block hidden text-body1-bold hover:bg-dark-1 hover:rounded px-3 py-2">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>

        {userData && (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Image
                    src={userData?.image ?? "/assets/profile-icon.svg"}
                    alt="profile_icon"
                    width={30}
                    height={30}
                    className="rounded-full object-contain cursor-pointer"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-body-medium p-4 space-y-2">
                <DropdownMenuLabel>{userData?.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />

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
                <SignOutButton>
                  <button className="flex items-center gap-4 text-body-medium hover:bg-dark-1 hover:rounded px-3 py-2 cursor-pointer">
                    <Image
                      src="/assets/logout.svg"
                      alt="Logout"
                      width={20}
                      height={20}
                    />
                    <p>Logout</p>
                  </button>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopMenu;
